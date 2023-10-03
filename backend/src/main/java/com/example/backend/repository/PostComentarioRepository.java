package com.example.backend.repository;

import com.example.backend.model.PostComentario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostComentarioRepository extends JpaRepository<PostComentario, Long> {

    List<PostComentario> findByIdPost(Long idPost);
}
