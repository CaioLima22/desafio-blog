package com.example.backend.config.secutity;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.backend.model.Pessoa;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtService {
    @Value("${api.security.token.secret}")
    private String secret;

    public String generateToken(Pessoa pessoa){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String jwt = JWT.create().withSubject(pessoa.getEmail()).sign(algorithm);
            return jwt;
        }catch (JWTCreationException e){
            throw new RuntimeException("Erro ao gerar o token!");
        }
    }

    public String validateJwt(String jwt){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm).build().verify(jwt).getSubject();
        }catch (JWTVerificationException e){
            return "";
        }
    }
}
