package com.example.backend.dto;

import com.example.backend.model.Pessoa;
import com.example.backend.model.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OutputPostByIdDTO {

    String titulo;
    String conteudo;
    String nomeAutor;

    public OutputPostByIdDTO(Post post, Pessoa autor){
        this.titulo = post.getTitulo();
        this.conteudo = post.getConteudo();
        this.nomeAutor = autor.getNome();
    }
}
