package com.example.demo2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo2.model.Item;
import com.example.demo2.model.Owner;
import com.example.demo2.repo.ItemRepo;
import com.example.demo2.repo.OwnerRepo;

@Service
@Transactional
public class ItemService {
	@Autowired
	ItemRepo itemrepo;
	@Autowired
	OwnerRepo ownerrepo;
	
	//get all items
	public List<Item> getAllItems(){
		return  itemrepo.findAll(Item.class);
		
	}
	
	//get item by id
	public Optional<Item> getItemById(int itemId) {
		return itemrepo.findById(itemId);
	}
	
	// add item
	public void addItem(Item item) { 
		itemrepo.save(item); 
		
	}
	
	//delete item
	public void deleteItem(int itemId) { 
		itemrepo.deleteById(itemId); 
		
	}
	
	//get all owners
	public List<Owner> getAllOwners(){
		return (List<Owner>) ownerrepo.findAll();
		
	}
	
	//get owner by id
		public Optional<Owner> getOwnerById(int ownerId) {
			return ownerrepo.findById(ownerId);
		}
	
	//add owner
	public Optional<Owner> addOwnerDetails(int itemId,Owner o) { 
		return itemrepo.findById(itemId).map(item -> {
			o.setItem(item);
			return ownerrepo.save(o);
		}); 
		
	}
	
	//delete owner
	/*
	 * public Optional<Object> deleteOwnerDetails(int itemId, int ownerId,Owner
	 * owner) { return ownerrepo.findByIdAnditemId(ownerId, itemId).map(ow -> {
	 * ownerrepo.delete(ow); return ownerrepo.save(owner);
	 * 
	 * });
	 * 
	 * }
	 */
	public void deleteOwner(int ownerId) { 
		ownerrepo.deleteById(ownerId); 
		
	}
	
}
