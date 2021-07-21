package com.example.todo.post;

import com.example.todo.post.dto.PostSaveRequest;
import com.example.todo.post.dto.PostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import javax.validation.Valid;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder.on;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8081")
public class PostController {
    private final PostRepository postRepository;

    @PostMapping("/new")
    public ResponseEntity<PostResponse> save(@Valid @RequestBody PostSaveRequest request) {
        Post post = postRepository.save(new Post(request.getContent()));
        PostResponse response = PostResponse.builder()
                .postId(post.getId())
                .content(post.getContent())
                .createdAt(post.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-M-dd hh:mm:ss")))
                .build();
        UriComponents uriComponents = MvcUriComponentsBuilder
                .fromMethodCall(on(PostController.class)
                .save(request))
                .build();
        return ResponseEntity.created(uriComponents.toUri())
                .body(response);
    }

    @GetMapping("")
    public ResponseEntity<List<PostResponse>> getAll() {
        List<PostResponse> response = postRepository.findAll()
                .stream()
                .map(post -> PostResponse.builder()
                        .postId(post.getId())
                        .content(post.getContent())
                        .createdAt(post.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-M-dd hh:mm:ss")))
                        .build())
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("{post-id}")
    public ResponseEntity<Void> delete(@PathVariable("post-id") Long postId) {
        Post findOne = postRepository.findById(postId)
                .orElseThrow(IllegalArgumentException::new);
        postRepository.delete(findOne);
        return ResponseEntity.noContent()
                .build();
    }
}
