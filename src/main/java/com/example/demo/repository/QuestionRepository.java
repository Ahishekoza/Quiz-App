package com.example.demo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Questions;
import com.example.demo.entities.Quizes;

public interface QuestionRepository extends JpaRepository<Questions,Integer> {

	public Set<Questions> findByQuize(Quizes quiz);

}
