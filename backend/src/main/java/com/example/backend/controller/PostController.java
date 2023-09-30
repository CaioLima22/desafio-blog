package com.example.backend.controller;

import com.example.backend.dto.PostInputDTO;
import com.example.backend.dto.PostOutputDTO;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("post")
public class PostController {

    @Autowired
    private PostRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<PostOutputDTO> findAll(){
        List<PostOutputDTO> postList = repository.findAll().stream().map(PostOutputDTO::new).collect(Collectors.toList());
        return postList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping (produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody PostInputDTO input){
        Post post = new Post(input);
        repository.save(post);
    }
}
