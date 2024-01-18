import { Component, OnInit } from '@angular/core';
import { Listener } from 'selenium-webdriver';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  listings:Listing[]=[];
  constructor() { }

  ngOnInit() {
    this.listings=fakeMyListings;
  }
  onDeleteClicked(listingId:string):void{
    alert(`Deleting your listing with listing Id ${listingId}`);
  }

}