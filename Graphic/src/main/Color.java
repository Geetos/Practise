package main;

public enum Color {
	Red(0xff0000),Blue(0x0000ff),Green(0x00ff00),White(0xffffff);
	private int val;
	Color(Integer val) {
		this.val = val;
	}
	public int getR() {
		return val>>16;
	}
	
	public int getG() {
		return val>>8 & 0xff;
	}
	
	public int  getB() {
		return val & 0xff;
	}
}
