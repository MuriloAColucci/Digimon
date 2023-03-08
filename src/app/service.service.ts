import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Service{
  routeDigimon?: string;
  private apiURL = 'https://digimon-api.vercel.app/api/';

  constructor(private http: HttpClient){
    this.routeDigimon = 'digimon';
  }

  getDigimonList(){
    return this.http.get(`${this.apiURL}${this.routeDigimon}`);
  }

}
