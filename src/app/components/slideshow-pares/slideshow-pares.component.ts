import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

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
  constructor() { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
  }

}
