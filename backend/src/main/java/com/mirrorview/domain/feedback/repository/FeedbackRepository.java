package com.mirrorview.domain.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mirrorview.domain.feedback.domain.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {


}