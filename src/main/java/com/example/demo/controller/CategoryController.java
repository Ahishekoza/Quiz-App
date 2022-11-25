package com.example.demo.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Categories;
import com.example.demo.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService; 
	
	@PostMapping("/")
	public Categories getCategory(@RequestBody Categories category) {
		return categoryService.addCategory(category);
		
	}
	
//	Get Category By Id
	@GetMapping("/{categoryId}")
	public Categories getCategory(@PathVariable("categoryId") int categoryId) {
		
		return categoryService.getCategory(categoryId);
	}
	
	
//	GetMapping all methods
	@GetMapping("/")
	public List<Categories> getAllCategories(){
		
		return categoryService.getCategories();
	}
	
//	UpdateCategory 
	
	@PutMapping("/{Id}")
	public Categories updateCategory(@RequestBody Categories category,@PathVariable("Id")int id) {
		
		Categories existingId=categoryService.getCategory(id);
		existingId.setTitle(category.getTitle());
		existingId.setDescription(category.getDescription());
		
		return categoryService.updateCategory(existingId);
	}
	
//	Delete Category
	
	@DeleteMapping("/{Id}")
	public void deleteCategory(@PathVariable("Id")int categoryId) {
		
		categoryService.deleteCategory(categoryId);
		
	}
	
}
