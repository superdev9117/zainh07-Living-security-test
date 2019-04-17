package io.github.jhipster.application.web.rest;

import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.jhipster.application.config.Constants;
import io.github.jhipster.application.domain.Fact;
import io.github.jhipster.application.repository.FactRepository;
import io.github.jhipster.application.repository.UserRepository;
import io.github.jhipster.application.service.FactService;
import io.github.jhipster.application.service.MailService;
import io.github.jhipster.application.service.UserService;
import io.github.jhipster.application.web.rest.util.HeaderUtil;

/**
 * REST controller for managing facts.
 * <p>
 * This class accesses the Fact entity, and needs to fetch its collection of authorities.
 * <p>
 */
@RestController
@RequestMapping("/api")
public class FactResource {

    private final Logger log = LoggerFactory.getLogger(FactResource.class);
    private final FactService factService;

    public FactResource(FactService factService) {
        this.factService = factService;
    }
    
     /**
     * update fact status
     */
    @GetMapping("/fact/{factId:" + Constants.LOGIN_REGEX + "}")
    public ResponseEntity<Void> addRemoveFavourite(@PathVariable String factId) throws URISyntaxException {
    	log.debug("REST request to add or remove favourite fact: {}", factId);
    	factService.addRemoveFavourite(factId);
        return ResponseEntity.ok().headers(HeaderUtil.createAlert( "fact updated succesfully " + factId, factId)).build();
    }
    
    /**
     * @return a string list of the all of the facts
     */
    @GetMapping("/fact")
    public List<Fact> getAllFacts() throws URISyntaxException {
    	log.debug("REST request to get all facts: {}");
    	return factService.getAllFacts();
    }
}
