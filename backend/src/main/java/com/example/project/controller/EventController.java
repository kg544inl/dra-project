package com.example.project.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.entity.Event;
import com.example.project.repository.EventRepository;
// import com.example.project.controller.EventNotFoundException;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
class EventController {

    private final EventRepository repository;

    EventController(EventRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/events/{id}")
    EntityModel<Optional<Event>> one(@PathVariable String id) {
        Optional<Event> event = repository.findById(id);
        // .orElseThrow(() -> new EventNotFoundException(id));

        return EntityModel.of(event,
            linkTo(methodOn(EventController.class).one(id)).withSelfRel(),
            linkTo(methodOn(EventController.class).all()).withRel("events"));
    }

    // @GetMapping("/events")
    // List<Event> all() {
    //     return repository.findAll();
    // }

    @GetMapping("/events")
    CollectionModel<EntityModel<Event>> all() {

    List<EntityModel<Event>> employees = repository.findAll().stream()
        .map(event -> EntityModel.of(event,
            linkTo(methodOn(EventController.class).one(event.getId())).withSelfRel(),
            linkTo(methodOn(EventController.class).all()).withRel("events")))
        .collect(Collectors.toList());

    return CollectionModel.of(employees, linkTo(methodOn(EventController.class).all()).withSelfRel());
    }

    @PostMapping("/events")
    Event newEvent(@RequestBody Event newEvent) {
        return repository.save(newEvent);
    }

    // @GetMapping("/events/{id}")
    // Optional<Event> one(@PathVariable String id) {
    //     return repository.findById(id);
    //     // .orElseThrow(() -> new EventNotFoundException(id));
    // }

    @PutMapping("/events/{id}")
    Event replaceEvent(@RequestBody Event newEvent, @PathVariable String id) {
        return repository.findById(id)
        .map(event -> {
            event.setTitle(newEvent.getTitle());
            event.setLink(newEvent.getLink());
            return repository.save(event);
        })
        .orElseGet(() -> {
            newEvent.setId(id);
            return repository.save(newEvent);
        });
    }

    @DeleteMapping("/events/{id}")
    void deleteEvent(@PathVariable String id) {
        repository.deleteById(id);
    }
}
