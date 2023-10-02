package com.example.backend.service;

import com.example.backend.model.Pessoa;
import com.example.backend.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {

    @Autowired
    PessoaRepository repository;

    public Pessoa findById(long id){
        return repository.findById(id).get();
    }
}
