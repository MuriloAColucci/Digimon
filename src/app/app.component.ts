import { Component, OnInit } from '@angular/core';
import { Service } from './service.service';

interface Digimon {
  name: string;
  img: string;
  level: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  digimonList: any;
  digimonSelectList: any;
  searchModelName = '';
  searchModelLevel = '';
  resultsLength = 5;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getDigimonList().subscribe((res)=>{
      this.digimonList = res

      this.digimonSelectList = res;



      console.log(this.digimonSelectList)

    })
  }
}
