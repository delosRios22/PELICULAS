import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  leerMas = 150;

  slideActores = {
    slidePerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('id', this.id);
    this.moviesService.getPeliculaDetalles(this.id)
    .subscribe(resp => {
      console.log(resp);
      this.pelicula = resp;
    });
    this.moviesService.getActoresDetalles(this.id)
    .subscribe(resp => { 
      console.log(resp);
      this.actores = resp['cast'];
    });
  }

  regresar(){
    this.modalCtrl.dismiss();
  }
}
