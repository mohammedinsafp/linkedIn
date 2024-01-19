import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {
  listings:Listing[]=[];
  constructor() { }

  ngOnInit() {
    this.listings=fakeListings;
  }

}
