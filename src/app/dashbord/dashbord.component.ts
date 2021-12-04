import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl();

  toppingList: string[] = [ 'Variable', 'Constante', 'Journaliere', 'Hebdomadaire'];
}
