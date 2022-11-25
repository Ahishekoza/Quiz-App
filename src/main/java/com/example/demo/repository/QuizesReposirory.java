package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Categories;
import com.example.demo.entities.Quizes;

public interface QuizesReposirory extends JpaRepository<Quizes,Integer>{
	
	public List<Quizes> findBycategory(Categories category);
	
	public List<Quizes> findByActive(boolean b );
	
	public List<Quizes> findByCategoryAndActive(Categories c, boolean  b);
	

}
