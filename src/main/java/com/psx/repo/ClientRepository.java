package com.psx.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.psx.entity.ClientDetails;

@Repository
public interface ClientRepository extends JpaRepository<ClientDetails, Integer> {

}
