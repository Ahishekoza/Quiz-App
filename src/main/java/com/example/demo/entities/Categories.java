package com.example.demo.entities;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Categories {
	
	public Set<Quizes> getQuizes() {
		return quizes;
	}
	public void setQuizes(Set<Quizes> quizes) {
		this.quizes = quizes;
	}
	
	
	@OneToMany(mappedBy="category",cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<Quizes>quizes=new LinkedHashSet<>();
	
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int cId;
	private String title;
	private String description;

	
}
