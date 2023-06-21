package com.example.project.controller;

public class EmployeeNotFoundException extends RuntimeException{
    EmployeeNotFoundException(String id) {
        super("Could not find event " + id);
    }
}
