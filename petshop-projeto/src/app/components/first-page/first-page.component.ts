import { Component } from '@angular/core';

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1')?.checkVisibility

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
  cont++

  if (cont > 3) {
    cont = 1
  }

  document.getElementById('radio'+ cont)?.checkVisibility
}


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})

export class FirstPageComponent {

}

