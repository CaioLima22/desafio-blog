package com.example.backend.dto;

import com.example.backend.model.Post;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Setter
@Getter
public class PostInputDTO {
    private String titulo;
    private String conteudo;
    private Date data_publicacao;
    private Integer autor_id;
}
