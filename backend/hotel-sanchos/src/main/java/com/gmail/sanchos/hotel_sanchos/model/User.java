package com.gmail.sanchos.hotel_sanchos.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data // Lombok annotation for getters, setters, toString, equals, and hashCode
@NoArgsConstructor // Lombok annotation for a no-args constructor
@AllArgsConstructor // Lombok annotation for an all-args constructor
@Builder // Lombok annotation for the builder pattern
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        ADMIN,
        CUSTOMER
    }
}