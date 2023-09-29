package com.example.backend.dto;

import com.example.backend.model.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

@Getter
public class PostOutputDTO {
    private Long id;
    private String titulo;
    private String conteudo;
    private Date data_publicacao;
    private Integer autor_id;

    public PostOutputDTO (Post post){
        this.id = post.getId();
        this.titulo = post.getTitulo();
        this.conteudo = post.getConteudo();
        this.autor_id = post.getAutor_id();;
        this.data_publicacao = post.getData_publicacao();
    }

}
