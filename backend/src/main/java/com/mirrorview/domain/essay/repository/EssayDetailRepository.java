package com.mirrorview.domain.essay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mirrorview.domain.essay.domain.EssayDetail;
import com.mirrorview.domain.essay.dto.EssayDetailDto;

public interface EssayDetailRepository extends JpaRepository<EssayDetail, Long>, EssayDetailRepositoryCustom{
}
