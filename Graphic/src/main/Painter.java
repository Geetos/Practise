package main;

import java.awt.Graphics;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;

public class Painter extends Graphic implements Runnable{

	private final int length;
	private BufferedImage bufferedImage;
	private BufferStrategy bufferStrategy;
	private Graphics graphics;
	private final byte[]  pixels;
	private Thread thread = new Thread(this);
	
	public Painter(int length,
			BufferedImage bufferedImage,
			Graphics graphics,
			BufferStrategy bufferStrategy) {
		super(length);
		this.length = length;
		this.graphics = graphics;
		this.bufferedImage = bufferedImage;
		this.bufferStrategy = bufferStrategy;
		pixels = ((DataBufferByte)(bufferedImage.getRaster().getDataBuffer())).getData();
	}
	
	public void draw() {
		setColor(Color.Red);
		for(int i=0;i<length;i++) {
			setStroke(i,0, length/2,length/2);
			wait(16);
			update();
		}
		clean();
	}
	
	private void update() {
		   copy(pixels);
	       graphics.drawImage( bufferedImage,
	                            0,
	                            0,
	                            length,
	                            length,
	                            null);
	        bufferStrategy.show();
	    }
	
	private void clean() {
		clearPixels();
		update();
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		while(true) draw();
	}

	private void wait(int millis) {
		try {
			thread.sleep(millis);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void  start() {
		thread.start();
	}
}
