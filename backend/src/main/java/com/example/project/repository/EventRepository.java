package com.example.project.repository;

import com.example.project.entity.Event;

// import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.data.jpa.repository.JpaRepository;

// @RepositoryRestResource
// public interface EventRepository extends CrudRepository<Event, String> {

// }

public interface EventRepository extends JpaRepository<Event, String> {
    
}