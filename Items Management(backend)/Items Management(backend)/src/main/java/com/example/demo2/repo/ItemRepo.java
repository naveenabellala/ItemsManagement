package com.example.demo2.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo2.model.Item;


@Repository
public interface ItemRepo extends JpaRepository<Item, Integer>{
	@Query(" from Item ")
	List<Item> findAll(Class<Item> class1);

	

	

}
