package main;

import java.awt.Canvas;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.*;
import javax.swing.JFrame;

public class Window extends JFrame{
	private final Canvas   canvas;
    private final Graphics  graphics;
    private Painter painter;
    private final BufferedImage   bufferedImage;
    private final BufferStrategy  bufferStrategy;
  
    
    public Window(String title, final int length) {
    	super(title);
    	canvas = new Canvas();
    	Dimension size = new Dimension(length, length);
        canvas.setMaximumSize(size);
        canvas.setMinimumSize(size);
        canvas.setPreferredSize(size);
        
        add(canvas);
        setResizable(false);
        pack();
        setVisible(true);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         
        bufferedImage = new BufferedImage(length, length, BufferedImage.TYPE_3BYTE_BGR);
        canvas.createBufferStrategy(1);
        bufferStrategy = canvas.getBufferStrategy();
         
        graphics = bufferStrategy.getDrawGraphics();
        bufferStrategy.show();
        painter = new Painter(length,bufferedImage,graphics,bufferStrategy);
    }
    
    public void init() {
    	painter.start();;
    }
}
