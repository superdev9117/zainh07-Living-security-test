package io.github.jhipster.application.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.github.jhipster.application.domain.Fact;

/**
 * Spring Data JPA repository for the Fact entity.
 */
@Repository
public interface FactRepository extends JpaRepository<Fact, Long> {
    Optional<Fact> findOneByFactKey(String key);
}
