package br.com.mark.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.mark.domain.model.Artigo;

@RestController
public class ArtigoController {

	@RequestMapping(value="/artigos/{id}", method=RequestMethod.GET)
	public Artigo editar(@PathVariable Long id) {
		System.out.println("id: "+id);
		Artigo art = new Artigo();
        art.setTitulo("teste editar");
		return art;
	}
	
	@RequestMapping(value="/artigos", method=RequestMethod.GET)
    public List<Artigo> listar() {
        List<Artigo> artigos = new ArrayList<Artigo>();
        Artigo art = new Artigo();
        art.setTitulo("teste");
        Artigo art2 = new Artigo();
        art2.setTitulo("teste2");
        artigos.add(art);
        artigos.add(art2);
        return artigos;
    }
}
