import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];

  constructor(private moviesService: MoviesService) {}
  
  buscar(event){
    const valor: string = event.detail.value;

    if(valor.length === 0){
      this.buscando = false;
      this.peliculas = []
      return;
    }
    this.buscando = true;
    this.moviesService.buscarPeliculas(valor)
    .subscribe(resp => {
      console.log(resp);
      this.peliculas = resp['results'];
      this.buscando = false;
      
    });
  }

}
