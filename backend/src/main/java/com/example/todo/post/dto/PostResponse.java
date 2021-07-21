package com.example.todo.post.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostResponse {
    private Long postId;
    private String content;
    private String createdAt;

    @Builder
    public PostResponse(Long postId, String content, String createdAt) {
        this.postId = postId;
        this.content = content;
        this.createdAt = createdAt;
    }
}
