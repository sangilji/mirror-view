package com.mirrorview.domain.chatroom.domain;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class ChatMessage {
    private String userNickname;
    private String message;
    private LocalDateTime timestamp;
}
