import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle';
import {Swiper} from 'swiper';
register();

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

}
