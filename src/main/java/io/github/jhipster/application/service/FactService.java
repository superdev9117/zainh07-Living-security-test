package io.github.jhipster.application.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.application.domain.Fact;
import io.github.jhipster.application.repository.FactRepository;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class FactService {

	private final Logger log = LoggerFactory.getLogger(FactService.class);

	private final FactRepository factRepository;

	public FactService(FactRepository factRepository) {
		this.factRepository = factRepository;
	}

	/**
	 * add/remove fact from favorite.
	 */
	public void addRemoveFavourite(String key) {
		Optional<Fact> factOptional = factRepository.findOneByFactKey(key);
		if(factOptional.isPresent()) {
			Fact fact = factOptional.get();
			if(fact.isFavourite())
				fact.setFavourite(false);
			else
				fact.setFavourite(true);
			factRepository.save(fact);
			log.debug("Added to favourite. fact: {}", fact);
		}else {
			Fact fact = new Fact();
			fact.setFavourite(true);
			fact.setFactKey(key);
			factRepository.save(fact);
			log.debug("Removed from favourite. fact: {}", fact);
		}
	}

	/**
	 * get all facts
	 * @return facts list
	 */
	public List<Fact> getAllFacts() {
		return factRepository.findAll();
	}
}
