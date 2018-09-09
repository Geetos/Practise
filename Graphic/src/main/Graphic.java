package main;

import javax.management.RuntimeErrorException;

public class Graphic {
	private Color color = Color.White;
	private final int length;
	private final int pixel_length = 3;
	public byte[] pixels;
	
	public Graphic(final int length) {
		this.length = length;
		pixels = new byte[length * length * pixel_length];
	}
	
	public void setColor(Color c) {this.color = c;}
	
	public void drawpixel(int x,int y) {
		if(x>=length || y>=length) throw new RuntimeErrorException(null, "x or y exceeded the bounds of window");
		y =length - y - 1;
		int offset = y * length * 3 + x * 3;
		pixels[offset	   ] = (byte) color.getR();
		pixels[offset + 1] = (byte) color.getG();
		pixels[offset + 2] = (byte) color.getB();
	}
	
	public void setStroke(int x0,int y0,int x1,int y1) {
		 int dx = Math.abs(x1-x0), sx = x0<x1 ? 1 : -1;
		 int dy =  Math.abs(y1-y0), sy = y0<y1 ? 1 : -1; 
		 int err = (dx>dy ? dx : -dy)/2, e2;

		 for(;;){
		    drawpixel(x0,y0);
		    if (x0==x1 && y0==y1) break;
		    e2 = err;
		    if (e2 >-dx) { err -= dy; x0 += sx; }
		    if (e2 < dy) { err += dx; y0 += sy; }
		 }
	}
	
	public void copy(byte[] array) {
		 for (int i = 0; i <length * length * pixel_length; i++) array[i] = pixels[i];
	}
	
	public void clearPixels() {
		for(int i=0;i<length;i++)
			for(int j=0;j<length * 3;j++)
				pixels[i*length*3+j] = (byte)0;
	}
}
