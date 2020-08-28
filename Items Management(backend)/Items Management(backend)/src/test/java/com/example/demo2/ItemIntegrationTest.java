package com.example.demo2;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo2.model.Item;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class ItemIntegrationTest {
	
	@LocalServerPort
	private int port;
	
	@Autowired
	private TestRestTemplate restTemplate;
	
	@SuppressWarnings("deprecation")
	@Test
	public void testGetAllItems() throws Exception{
		@SuppressWarnings("rawtypes")
		ResponseEntity<List> response = 
				this.restTemplate.getForEntity("http://localhost:" + port + "/items", List.class);
		
		assertThat(response.getStatusCode(), equalTo(HttpStatus.OK));
		
	}
	@Test
	public void testAddItems() throws Exception {
		final String baseUrl = "http://localhost:"+port+"/additems";
		
		URI uri = new URI(baseUrl);
        Item item = new Item(5, "Iphone11", "Apple");      
 
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-COM-PERSIST", "true");      
 
        HttpEntity<Item> request = new HttpEntity<>(item, headers);
        
        ResponseEntity<String> result = this.restTemplate.postForEntity(uri, request, String.class);
        Assert.assertEquals(201, result.getStatusCodeValue());
	}
	@Test
	public void testDeleteItems() throws Exception {
		final String uri = "http://localhost:"+port+"/items/{id}";
		
		Map<String, String> params = new HashMap<String, String>();
	    params.put("id", "2");
	     
	    
	    restTemplate.delete ( uri,  params );
	}

}
