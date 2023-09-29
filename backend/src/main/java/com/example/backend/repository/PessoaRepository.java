package com.example.backend.repository;

import com.example.backend.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    UserDetails findByEmail(String email);
}
