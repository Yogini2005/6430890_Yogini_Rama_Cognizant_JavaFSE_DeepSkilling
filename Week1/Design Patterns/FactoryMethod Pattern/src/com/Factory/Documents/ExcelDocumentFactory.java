package com.Factory.Documents;

public class ExcelDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument() {
		return new ExcelDocument();
	}

}
