package main;

import java.util.Random;

/*
 * 
 *  initialize map with false
 *  true means mine
 * 
 */

public class mine {
	
	private int mapSize;
	private int amountOfMines;
	private boolean[][] map;
	
	//generate map
	public mine(int mapSize,int amountOfMines) {
		this.mapSize = mapSize;
		this.amountOfMines = amountOfMines;
		initMap();
		setMines();
		//showMap();
	}
	
	private void initMap() {
		map = new boolean[mapSize][mapSize];
		for(int i = 0;i<mapSize;i++)
			for(int j = 0;j<mapSize;j++)
				map[i][j] = false;
		
	}
	private void  setMines() {
		int x , y;
		for(int i = 0;i<amountOfMines;i++) {
			do{
				x = new Random().nextInt(mapSize);
				y = new Random().nextInt(mapSize);
			}while(map[x][y]);
			map[x][y] = true; //set a mine at here
		}
	}
	
	public boolean[][] getMap(){
		return map;
	}
	
	
	private void showMap() {
		for(int i = 0;i<mapSize;i++) {
			for(int j = 0;j<mapSize;j++) {
				System.out.print(map[i][j]);
			}
				System.out.println();
		}
	}
	
}
