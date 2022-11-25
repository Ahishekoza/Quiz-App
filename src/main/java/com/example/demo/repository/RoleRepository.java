package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.RoleId;

public interface RoleRepository extends JpaRepository<RoleId,Long> {

}
