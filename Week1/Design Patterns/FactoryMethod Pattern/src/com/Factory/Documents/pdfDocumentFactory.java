package com.Factory.Documents;

public class pdfDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument() {
		return new pdfDocument();
	}

}
