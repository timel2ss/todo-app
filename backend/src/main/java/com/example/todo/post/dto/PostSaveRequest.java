package com.example.todo.post.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostSaveRequest {
    @NotBlank
    private String content;

    public PostSaveRequest(String content) {
        this.content = content;
    }
}
