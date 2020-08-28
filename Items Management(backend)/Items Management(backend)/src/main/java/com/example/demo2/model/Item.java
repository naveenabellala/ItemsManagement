package com.example.demo2.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="item")
public class Item implements Serializable{
	@Id
	@Column(name="itemid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int itemId;
	@Column(name="model")
	private String model;
	@Column(name="company")
	private String company;
	
	@JsonManagedReference
	@OneToMany(mappedBy="item", cascade = CascadeType.ALL)	
	private List<Owner> owner;
	
	public Item() {
		
	}
	
	public Item(int itemid, String model, String company) {
		super();
		this.itemId = itemid;
		this.model = model;
		this.company = company;
		
	}
	public List<Owner> getOwner() {
		return owner;
	}
	public void setOwner(List<Owner> owner) {
		this.owner = owner;
	}
	
	

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	
	@Override
    public String toString() {
        return "Item{" +
                "id=" + itemId +
                ", model=" + model + 
                ", company='" + company +
                '}';
    }
	

}
