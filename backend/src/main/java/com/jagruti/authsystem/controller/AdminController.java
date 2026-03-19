package com.jagruti.authsystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jagruti.authsystem.entity.User;
import com.jagruti.authsystem.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AuthService authService;

    // ✅ GET ALL USERS (ADMIN)
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return authService.getAllUsers();
    }
}