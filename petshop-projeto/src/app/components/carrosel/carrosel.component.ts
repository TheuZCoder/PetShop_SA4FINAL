import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/1.png',
    };
    this.slides[1] = {
      src: './assets/img/2.png',
    }
    this.slides[2] = {
      src: './assets/img/3.png',
    }
  }
}
