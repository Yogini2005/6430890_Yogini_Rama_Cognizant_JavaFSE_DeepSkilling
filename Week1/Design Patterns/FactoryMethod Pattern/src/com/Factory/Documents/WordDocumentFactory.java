package com.Factory.Documents;

public class WordDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument() {
		return new WordDocument();
	}

}
