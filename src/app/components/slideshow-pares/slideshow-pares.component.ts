import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  //ver un parte del slide siguiente
  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true
  }
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
  }
  

  async verDetalle(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
