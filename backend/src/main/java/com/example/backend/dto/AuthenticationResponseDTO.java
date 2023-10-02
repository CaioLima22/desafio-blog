package com.example.backend.dto;

import com.example.backend.model.Pessoa;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationResponseDTO {
    private String token;
    private Pessoa pessoa;

    public AuthenticationResponseDTO(String token, Pessoa pessoa) {
        this.pessoa = pessoa;
        this.token = token;
    }
}
