package com.example.demo2.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo2.model.Owner;
@Repository
public interface OwnerRepo extends JpaRepository<Owner, Integer>{
	@Query("from Owner where ownerId=:o and itemId=:i")
	Optional<Owner> findByIdAnditemId(@Param("o")int ownerId,@Param("i") int itemId);

}
