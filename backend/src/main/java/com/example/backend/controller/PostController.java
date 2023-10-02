package com.example.backend.controller;

import com.example.backend.dto.OutputPostByIdDTO;
import com.example.backend.dto.PostInputDTO;
import com.example.backend.dto.PostOutputDTO;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import com.example.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("post")
public class PostController {

    @Autowired
    private PostRepository repository;

    @Autowired
    private PostService service;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<PostOutputDTO>> findAll(){
        List<PostOutputDTO> postList = repository.findAll().stream().map(PostOutputDTO::new).collect(Collectors.toList());
        return  ResponseEntity.ok(postList);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping (produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Post save(@RequestBody PostInputDTO input){
        try {
             Post postSalvo = service.save(input);
             return postSalvo;
        }catch (Exception e){
            return null;
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deletePost(@PathVariable Long id) {
        try {
            OutputPostByIdDTO post = service.findById(id);
            if (post == null) {
                return ResponseEntity.notFound().build();
            }
            service.delete(id);
            return ResponseEntity.ok(id);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<OutputPostByIdDTO> getUserById(@PathVariable Long id) {
        OutputPostByIdDTO post = service.findById(id);

        if (post != null) {
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
