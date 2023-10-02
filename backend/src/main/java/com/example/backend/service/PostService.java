package com.example.backend.service;

import com.example.backend.dto.OutputPostByIdDTO;
import com.example.backend.dto.PostInputDTO;
import com.example.backend.model.Pessoa;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    PostRepository repository;

    @Autowired
    PessoaService pessoaService;

    public Post save (PostInputDTO postInput){
        Post entity = new Post(postInput);
        return repository.save(entity);
    }

    public OutputPostByIdDTO findById (Long id){
        Post post = repository.findById(id).get();
        Pessoa autor =pessoaService.findById(post.getAutor_id());
        OutputPostByIdDTO output = new OutputPostByIdDTO(post, autor);
        return output;
    }

    public void delete (Long id){
        repository.deleteById(id);
    }
}
