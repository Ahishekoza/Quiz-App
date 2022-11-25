package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Questions;
import com.example.demo.entities.Quizes;
import com.example.demo.service.QuestionsService;
import com.example.demo.service.QuizService;

//import io.jsonwebtoken.lang.Collections;

@RestController
@CrossOrigin("*")
@RequestMapping("/questions")
public class QuestionController {

	@Autowired
	private QuestionsService questionService;
	
	@Autowired 
	private QuizService quizService;
	
	@PostMapping("/")
	public Questions addQuestion(@RequestBody Questions question) {
		return questionService.addQuestions(question);
	}
	
	@GetMapping("/")
	public List<Questions> getAllQuestions()
	{
		return questionService.getAllQuestion();
	}
	
	
	@GetMapping("/quiz/{quizId}")
	public List getQuestionofQuiz(@PathVariable("quizId") int quizId) {
		
//		Quizes quiz=new Quizes();
//		quiz.setqId(quizId);
//		return questionService.getQuestionsofQuiz(quiz);
		
		Quizes quiz= quizService.getQuiz(quizId);
		Set<Questions> questions=quiz.getQuestion();
		List list=new ArrayList(questions);
		if(list.size()>=Integer.parseInt(quiz.getNoOfQuestions())) {
			
			list=list.subList(0, Integer.parseInt(quiz.getNoOfQuestions()+1));
		}
		Collections.shuffle(list);
		
		return list;
		
		
	}
	
	@GetMapping("/quiz/all/{quizId}")
	public Set<Questions> getAllQuestionofQuiz(@PathVariable("quizId") int quizId) {
		
		Quizes quiz=new Quizes();
		quiz.setqId(quizId);
		return questionService.getQuestionsofQuiz(quiz);
		
		
		
	}
	
	@GetMapping("{questionId}")
	public Questions getQuestion(@PathVariable("questionId")int quesId) {
		return questionService.getQuestions(quesId);
	}
	
	@PutMapping("/{quizId}")
	public Questions updateQuestion(@RequestBody Questions question ,@PathVariable("quizId") int quizId) {
		
		Questions existingQuestions=questionService.getQuestions(quizId);
		existingQuestions.setContent(question.getContent());
		existingQuestions.setImage(question.getImage());
		existingQuestions.setAns(question.getAns());
		existingQuestions.setOption1(question.getOption1());
		existingQuestions.setOption2(question.getOption2());
		existingQuestions.setOption3(question.getOption3());
		existingQuestions.setOption4(question.getOption4());
		existingQuestions.setQuize(question.getQuize());
		
		return questionService.updateQuestions(existingQuestions);
	}
	
	@DeleteMapping("/{questionId}")
	public void deleteQuestion(@PathVariable("questionId")int questionId) {
		questionService.deleteQuestion(questionId);
	}

}
