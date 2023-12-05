import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayValue: string = 'none';

  mostrarElemento(): void {
    this.displayValue = 'block';
  }

  esconderElemento(): void {
    this.displayValue = 'none';
  }

}
