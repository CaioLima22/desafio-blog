package com.example.backend.model;

import com.example.backend.dto.PostInputDTO;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Table(name = "post")
@Entity(name = "post")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String conteudo;
    private Date data_publicacao;
    private Integer autor_id;

    @Transient
    public String jwtAutor;

    public Post (PostInputDTO input){
        this.titulo = input.getTitulo();
        this.conteudo = input.getConteudo();
        this.data_publicacao = input.getData_publicacao();
        this.autor_id = input.getAutor_id();
    }
}
