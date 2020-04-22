import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaMovie } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;
const hoy = new Date();

const ultimoDiaMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
const mesActual = hoy.getMonth() + 1;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularesPage = 0;

  constructor(private http: HttpClient) { }


  //variable privada tipo string, utilizada solo por el servicio
  private ejectuarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get(query);
  }

  //creación del primer servicio
  getPropiedadesPeli(){
    let mesTexto;
    if (mesActual <10) mesTexto = '0' + mesActual;else mesTexto = mesActual;
    const inicio = `${hoy.getFullYear()}-${mesTexto}-01`;
    const fin = `${hoy.getFullYear()}-${mesTexto}-${ultimoDiaMes}`;
    return this.ejectuarQuery<RespuestaMovie>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
  }

  getPopulares(){
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejectuarQuery<RespuestaMovie>(query);
  }
}
