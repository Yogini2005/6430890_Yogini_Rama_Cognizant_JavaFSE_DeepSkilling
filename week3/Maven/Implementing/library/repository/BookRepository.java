package com.library.repository;
import org.springframework.stereotype.Component;
@Component
public class BookRepository {
	public void save(String bookName) {
        System.out.println("Saving book: " + bookName);
    }
}
