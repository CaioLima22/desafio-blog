package com.example.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Table(name = "post_comentario")
@Entity(name = "post_comentario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class PostComentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_post")
    private Long idPost;

    @ManyToOne
    @JoinColumn(name = "id_autor", referencedColumnName = "id")
    private Pessoa autor;

    @Column(name = "comentario")
    private String comentario;

    @Column(name = "data_cadastro")
    private Date dataCadastro;
}
