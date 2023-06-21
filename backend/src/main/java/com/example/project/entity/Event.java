package com.example.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
// import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @NotBlank(message = "Title is mandatory")
    private String title;

    @NotBlank(message = "Link is mandatory")
    private String link;

    public Event() {
    }

    public Event(String id, String title, String link) {
        this.id = id;
        this.title = title;
        this.link = link;
    }

    // 
    public static Event fromEventData(Event eventData) {
        return new Event(eventData.getId(), eventData.getTitle(), eventData.getLink());
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Override
    public String toString() {
        return "Event [id=" + id + ", title=" + title + ", link=" + link + "]";
    }

}