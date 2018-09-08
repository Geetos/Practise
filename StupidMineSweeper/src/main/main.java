package main;

import java.io.File;
import java.net.MalformedURLException;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.*;
import javafx.stage.Stage;

public class main extends Application {

	private int mapSize = 10;
	private int amountOfMines = 15;
	private boolean[][] map;
	private short[][] mapStatus = new short[mapSize][mapSize];
	private boolean isDead = false;
	private ImageView[][] mapCell = new ImageView[mapSize][mapSize];
	private Button btnStatus = new Button();
	private int dugCell = 0;
	private String absFileUrl;
	@Override
	public void start(Stage stage) throws Exception {
		VBox mainPane = new VBox();
		GridPane topPane = new GridPane();

		HBox timePane = new HBox();
		HBox statusPane = new HBox();
		HBox mineLeftPane = new HBox();

		GridPane mapPane = new GridPane();
		
		Label lblMinesLeft = new Label("Total Mines : ");
		
		Label lblAmountOfMines = new Label(String.valueOf(amountOfMines));

		statusPane.getChildren().add(btnStatus);
		mineLeftPane.getChildren().addAll(lblMinesLeft, lblAmountOfMines);
		
		File absFile = new File(this.getClass().getResource("/").getPath());
		absFileUrl =absFile.toURI().toURL().toString();
		
		map = new mine(mapSize, amountOfMines).getMap();

		for (int i = 0; i < mapSize; i++) {
			ColumnConstraints column = new ColumnConstraints(40);
			mapPane.getColumnConstraints().add(column);
		}

		for (int i = 0; i < mapSize; i++) {
			RowConstraints row = new RowConstraints(40);
			mapPane.getRowConstraints().add(row);
		}

		for (int i = 0; i < mapSize; i++) {
			for (int j = 0; j < mapSize; j++) {
				mapStatus[i][j] = 0;
				mapCell[i][j] = new ImageView(fetchImage("cell"));
				addListener(mapCell[i][j], i, j);
				mapPane.add(mapCell[i][j], j, i);
			}
		}
		
		btnStatus.setOnAction((ActionEvent e) -> {
			try {
				restart();
			} catch (MalformedURLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		});
		
		topPane.add(timePane, 0, 0);
		topPane.add(statusPane, 1, 0);
		topPane.add(mineLeftPane, 2, 0);

		mainPane.getChildren().addAll(topPane, mapPane);
		Scene scene = new Scene(mainPane);
		stage.setTitle("Mine Sweeper");
		stage.setScene(scene);
		stage.setHeight(445);
		stage.setWidth(405);
		stage.setResizable(false);
		stage.show();
	}

	private void addListener(ImageView mapCell, final int x, final int y) {
		mapCell.setOnMouseReleased(new EventHandler<MouseEvent>() {
			/*
			 * 
			 * 0 not dig yet 1 dug 2 flag area
			 * 
			 */
			@Override
			public void handle(MouseEvent event) {
				if (mapStatus[x][y] == 1 || isDead)
					return;
				try {
					if (event.getButton() == MouseButton.PRIMARY) {// left click
						if (mapStatus[x][y] == 2)
							return;
						if (map[x][y]) { // mine here
							mapCell.setImage(fetchImage("mine"));
							isDead = true;
						} else { // safe here
							dugCell++;
							int mines = minesSurround(x, y);
							mapStatus[x][y] = 1;
							if (mines == 0)
								searchSafeCell(x, y);
							
							mapCell.setImage(fetchImage(String.valueOf(mines)));
						}
					} else { // right click and set up or get off a flag here
						if (mapStatus[x][y] == 2) {
							mapCell.setImage(fetchImage("cell"));
							mapStatus[x][y] = 0;
						} else {
							mapCell.setImage(fetchImage("flag"));
							mapStatus[x][y] = 2;
						}
					}
				} catch (MalformedURLException e) {
					e.printStackTrace();
				}

				isGameOver();
			}

		});
	}

	private void searchSafeCell(int x, int y) throws MalformedURLException {
		for (int i = x - 1; i < x + 2 && i < mapSize; i++) {
			for (int j = y - 1; j < y + 2 && j < mapSize; j++) {
				if (i < 0 || j < 0)
					continue;
				if (mapStatus[i][j] != 1) { // not dig yet
					mapStatus[i][j] = 1;
					dugCell++;
					if (minesSurround(i, j) > 0) {
						mapCell[i][j].setImage(fetchImage(String.valueOf(minesSurround(i, j))));
					} else {
						mapCell[i][j].setImage(fetchImage("0"));
						searchSafeCell(i, j);
					}
				}
			}
		}

	}

	private short minesSurround(int x, int y) {
		short mines = 0;
		for (int i = x - 1; i < x + 2 && i < mapSize; i++) {
			for (int j = y - 1; j < y + 2 && j < mapSize; j++) {
				if (i < 0 || j < 0)
					continue;
				if (map[i][j]) // mine here
					mines++;
			}
		}
		return mines;
	}

	private Image fetchImage(String cellType) throws MalformedURLException {
		String cellImageFileUrl = absFileUrl + "Resource/" + cellType + ".png";
		Image cellImage = new Image(cellImageFileUrl, false);
		return cellImage;
	}

	private void isGameOver() {
		if (isDead) {
			btnStatus.setText("Game Over ! Click here and restart ");
			return;
		}
		
		System.out.println(dugCell);
		if (mapSize * mapSize - dugCell == amountOfMines) {
			btnStatus.setText("Win ! Click here and restart");
		}

	}
	
	private void restart() throws MalformedURLException {
		dugCell = 0;
		isDead = false;
		map = new mine(mapSize, amountOfMines).getMap();
		for (int i = 0; i < mapSize; i++) 
			for (int j = 0; j < mapSize; j++) {
				mapCell[i][j].setImage(fetchImage("cell"));
				mapStatus[i][j] = 0;
			}
		
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
