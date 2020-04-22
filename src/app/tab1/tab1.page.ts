import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula, RespuestaMovie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(private movieService: MoviesService) {}

  /*El metodo get retorna un objeto observable
  Los observables http se deben consumir mediante subscribe
  Subscribe tiene 2 parametros (data, err, end)
  En este ejemplo nuestro subscribe solo utiliza el primero (data) */

  ngOnInit(){  //consumir la variable observable del método getpropiedadesPeli del servicio y mostrar el JSON
    this.movieService.getPropiedadesPeli()
      .subscribe((resp: RespuestaMovie) => {
        console.log('Resp', resp);
        this.peliculasRecientes = resp.results;
        
      });

      this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getPopulares()
    .subscribe((resp : RespuestaMovie) =>{
      const arrtemp = [...this.populares, ...resp.results];
      this.populares = arrtemp;
    })
  }

}
