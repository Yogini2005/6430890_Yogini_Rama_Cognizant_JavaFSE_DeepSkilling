package com.Factory.Documents;

public class ExcelDocument implements Document {
	@Override
	public void open() {
		System.out.println("Opening an excel document.");
	}

}
