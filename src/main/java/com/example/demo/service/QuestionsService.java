package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Questions;
import com.example.demo.entities.Quizes;
import com.example.demo.repository.QuestionRepository;

@Service
public class QuestionsService {
	
	@Autowired
	private QuestionRepository questionRepository;
	
//	get all quiz
	public List<Questions> getAllQuestion(){
		return questionRepository.findAll();
				
	}
	
	public Questions updateQuestions(Questions question) {
		
		return questionRepository.save(question);
	}
	
		  public Questions addQuestions(Questions question) {
				
				return questionRepository.save(question);
			}
	
     
    public Questions getQuestions(int quesId) {
    	return questionRepository.findById(quesId).get();
    }
	
    public Set<Questions> getQuestionsofQuiz(Quizes quiz){
    
    	
    	return questionRepository.findByQuize(quiz);
    	
    }
    
    public void deleteQuestion(int quesId) {
    	Questions question=new Questions();
    	question.setQuesId(quesId);
    	questionRepository.delete(question);
    }
	

}
