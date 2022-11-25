package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Categories;
import com.example.demo.entities.Quizes;
import com.example.demo.repository.QuizesReposirory;

@Service
public class QuizService {

	@Autowired
	private QuizesReposirory quizRepository;
	
	
//	List all
	public List<Quizes> getAllQuizes(){
		return quizRepository.findAll();
	}
	
//	Update Quiz
	public Quizes updateQuizes(Quizes quiz) {
		return quizRepository.save(quiz);
	}
//	Add quiz
	
	public Quizes addQuize(Quizes quiz) {
		return quizRepository.save(quiz);
	}
	
//	Get Quiz
	
	public Quizes getQuiz(int qId) {

		return quizRepository.findById(qId).get();
	}
//	Delete 
	
	public void deleteQuiz(int qId) {
		 quizRepository.deleteById(qId);
	}

	public List<Quizes> getQuizesByCategory(Categories category) {
		
		return quizRepository.findBycategory(category);
		 
	}
	
	public List<Quizes> getActiveQuizes(){
		return quizRepository.findByActive(true);
	}
	
	public List<Quizes> getActiveQuizesAndCategory(Categories c){
		
		return quizRepository.findByCategoryAndActive(c, true);
	}
}
