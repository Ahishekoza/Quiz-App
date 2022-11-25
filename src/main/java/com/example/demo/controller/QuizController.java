package com.example.demo.controller;

import java.util.List;

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
import com.example.demo.entities.Quizes;
import com.example.demo.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/")
	public Quizes addQuize(@RequestBody Quizes quiz) {
	
		return quizService.addQuize(quiz);
	}

	
//	Getting User
	@GetMapping("/")
	public List<Quizes> getAllQuizes(){
		
		return quizService.getAllQuizes();
	}
	
	@GetMapping("/{quizId}")
	public Quizes getQuiz(@PathVariable("quizId")int quizId) {
		
		return quizService.getQuiz(quizId);
	}
	
	@PutMapping("/")
	public Quizes updateQuiz(@RequestBody Quizes quiz) {
		
//		Quizes existingQuiz=quizService.getQuiz(quizId);
//		existingQuiz.setTitle(quiz.getTitle());
//		existingQuiz.setDescription(quiz.getDescription());
//		existingQuiz.setMaxMarks(quiz.getMaxMarks());
//		existingQuiz.setNoOfQuestions(quiz.getNoOfQuestions());
		
		
		return quizService.updateQuizes(quiz);
		
	}
	
	@DeleteMapping("/{quizId}")
	public void deleteQuizes(@PathVariable("quizId")int quizId) {
		
		quizService.deleteQuiz(quizId);
	}
	
	
//	Get Quizes Category Wise
	
	@GetMapping("/category/{cId}")
	public List<Quizes> getQuizByCate(@PathVariable("cId") int cId){
		
		
		Categories category=new Categories();
		category.setcId(cId);
		return quizService.getQuizesByCategory(category);
		
		
		
	}
	
	
	
	@GetMapping("/active")
	public List<Quizes>getActiveQuizes(){
		return quizService.getActiveQuizes();
	}
	
	
	@GetMapping("category/active/{cId}")
	public List<Quizes> getActiveCategoryQuizes(@PathVariable("cId") int cId){
		Categories category=new Categories();
		category.setcId(cId);
		
		return quizService.getActiveQuizesAndCategory(category);
	}
	
	

}
