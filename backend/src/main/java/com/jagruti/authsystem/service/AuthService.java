package com.jagruti.authsystem.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jagruti.authsystem.dto.AuthResponse;
import com.jagruti.authsystem.dto.LoginRequest;
import com.jagruti.authsystem.dto.RegisterRequest;
import com.jagruti.authsystem.entity.User;
import com.jagruti.authsystem.repository.UserRepository;
import com.jagruti.authsystem.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil; // ✅ Added

    // REGISTER
    public String register(RegisterRequest request) {

        // Convert DTO → Entity
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        userRepository.save(user);

        return "User registered successfully";
    }

    // LOGIN
    public AuthResponse login(LoginRequest request) {

        // Find user by email
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Check password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // ✅ Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());

        return AuthResponse.builder()
                .token(token)
                .email(user.getEmail())
                .role(user.getRole().name())
                .build();
    }
    // ✅ ADD HERE
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
}