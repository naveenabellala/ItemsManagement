package com.example.demo2.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



import com.example.demo2.model.Item;
import com.example.demo2.model.Owner;
import com.example.demo2.service.ItemService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ItemController {
	@Autowired
	ItemService service;
	
	//get all items
	@RequestMapping("/items")
	private  ResponseEntity<List<Item>> getAllItems(){
		List<Item> items = service.getAllItems();
		 return new ResponseEntity<List<Item>>(items, HttpStatus.OK);
	}
	
	//get item by id
	@RequestMapping("/items/{itemId}")
	private Optional<Item> getItemById(@PathVariable("itemId") int itemId) {
		return service.getItemById(itemId);
	}
	
	//add items
	@PostMapping("/additems") 
	private  void addItem(@RequestBody Item item) {
		  service.addItem(item); 
		   
		  
	}
	
	//delete items
	@DeleteMapping("/items/{itemid}") 
	private void deleteItem(@PathVariable("itemid") int itemid) {
		service.deleteItem(itemid); 
		
		
	}
	//get all owners
	@GetMapping("/owners")
	private ResponseEntity<List<Owner>> getAllOwners(){
		List<Owner> owners = service.getAllOwners();
		return new ResponseEntity<List<Owner>>(owners, HttpStatus.OK);
	}
	
	//get owner by id
		@RequestMapping("/owners/{ownerId}")
		private Optional<Owner> getOwnerById(@PathVariable("ownerId") int ownerId) {
			return service.getOwnerById(ownerId);
		}
	
	//add owner
	@PostMapping("/items/{itemId}/owner")
	public Optional<Owner> createOwner(@PathVariable(value="itemId") int itemId,
			@Valid @RequestBody Owner owner) {
		return service.addOwnerDetails(itemId, owner);
		 
	}
	
	//delete owner
	/*
	 * @DeleteMapping("/items/{itemId}/owner/{ownerId}") public void
	 * deleteOwnerdetails(@PathVariable (value = "itemId") int itemId,
	 * 
	 * @PathVariable (value = "ownerId") int ownerId,
	 * 
	 * @RequestBody Owner owner){ service.deleteOwnerDetails(itemId, ownerId,
	 * owner); }
	 */
	
	@DeleteMapping("/owner/{ownerId}") 
	private void deleteOwner(@PathVariable("ownerId") int ownerId) {
		service.deleteOwner(ownerId); 
		
		
	}
	
	
}
