package com.generation.cohore23.app.repositories;

import org.springframework.stereotype.Repository;

import com.generation.cohorte23.app.model.Libro;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LibrosRepositorios {
	public List<Libro> listarLibros() {
		List<Libro> lista = new ArrayList<Libro>();
		lista.add(new Libro("Spring Boot", "Luis", "1"));
		lista.add(new Libro("Java", "Pedro", "2"));
		lista.add(new Libro("C", "Richard", "3"));
		return lista;
	}

}
