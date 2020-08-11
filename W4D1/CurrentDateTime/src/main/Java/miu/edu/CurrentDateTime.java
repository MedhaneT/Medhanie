package com.wap;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrentDateTime extends SimpleTagSupport {
	String color;
	String size;

	// render custom tag
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();
		if (color != null && size !=null) {
			Date dNow = new Date();
			SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
			//System.out.println("Current Date: " + ft.format(dNow));
			//<span style="color: red; font-size: 12px;">Mon 2016.04.04 at 04:14:09 PM PDT</span>
			out.write(String.format("<span style='color:%s; font-size:%s'>%s </span>", color, size,ft.format(dNow)));
		} else {
			out.write(String.format("<span>%s</span>", size));
		}
	}

	// Need a setter for each attribute of custom tag
	public void setColor(String color) {
		this.color = color;
	}

	public void setSize(String size) {
		this.size = size;
	}
}