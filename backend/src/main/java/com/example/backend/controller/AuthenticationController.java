package com.example.backend.controller;

import com.example.backend.config.secutity.JwtService;
import com.example.backend.dto.AuthenticationDTO;
import com.example.backend.dto.AuthenticationResponseDTO;
import com.example.backend.model.Pessoa;
import com.example.backend.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PessoaRepository repository;

    @Autowired
    private JwtService jwtService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity login (@RequestBody AuthenticationDTO data){
        UsernamePasswordAuthenticationToken usernamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
        Authentication auth = this.authenticationManager.authenticate(usernamePassword);

        String token = jwtService.generateToken((Pessoa) auth.getPrincipal());
        AuthenticationResponseDTO response = new AuthenticationResponseDTO(token, (Pessoa) auth.getPrincipal());

        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity create(@RequestBody AuthenticationDTO data){
        if( (data.getEmail() == null || data.getSenha() == null || data.getNome() == null )
                || this.repository.findByEmail(data.getEmail()) != null) return ResponseEntity.badRequest().build();

        String senhaHash = new BCryptPasswordEncoder().encode(data.getSenha());
        Pessoa novaPessoa = new Pessoa(data.getEmail(), senhaHash, data.getNome());

        this.repository.save(novaPessoa);

        return ResponseEntity.ok().build();
    }
}
