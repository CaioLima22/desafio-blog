package com.example.backend.service;

import com.example.backend.dto.PostInputDTO;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    PostRepository repository;

    public Post save (PostInputDTO postInput){
        Post entity = new Post(postInput);
        return repository.save(entity);
    }

    public Post findById (Long id){
        return repository.findById(id).get();
    }

    public void delete (Long id){
        repository.deleteById(id);
    }
}
