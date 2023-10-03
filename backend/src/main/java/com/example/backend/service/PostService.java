package com.example.backend.service;

import com.example.backend.dto.OutputPostByIdDTO;
import com.example.backend.dto.PostInputDTO;
import com.example.backend.model.Pessoa;
import com.example.backend.model.Post;
import com.example.backend.model.PostComentario;
import com.example.backend.repository.PostComentarioRepository;
import com.example.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    PostRepository repository;

    @Autowired
    PostComentarioRepository postComentarioRepository;

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

    public PostComentario findComentarioById(Long id){
        PostComentario comentario = postComentarioRepository.findById(id).get();

        return comentario;
    }

    public List<PostComentario> findComentarioByIdPost (Long id){
        List<PostComentario> comentarios = postComentarioRepository.findByIdPost(id);
        if(!comentarios.isEmpty()){
            return comentarios;
        }else{
         return new ArrayList<>();
        }
    }

    public PostComentario saveComentario (PostComentario input){
        return postComentarioRepository.save(input);
    }

    public void delete (Long id){
        repository.deleteById(id);
    }

    public void deleteComentario (Long id){
        postComentarioRepository.deleteById(id);
    }
}
