package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Categories;
import com.example.demo.repository.CategotyRepository;

@Service
public class CategoryService {
	
	@Autowired 
	private CategotyRepository categoryRepository;

//	List all the Categories
	public List<Categories> getCategories(){
		
		return categoryRepository.findAll();
	}
	
//	update Category
	public Categories updateCategory(Categories category) {
		return categoryRepository.save(category);
		
	}
	
//	get Category by Id
	public Categories getCategory(int cId) {
		return categoryRepository.findById(cId).get();
		
	}
	
	public Categories addCategory(Categories category) {
		return categoryRepository.save(category);
		
	}
	
	public void deleteCategory(int cId) {
		categoryRepository.deleteById(cId);
	}
	
}
