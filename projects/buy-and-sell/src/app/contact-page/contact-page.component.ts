import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listener } from 'selenium-webdriver';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email:string='';
  message:string='';
  listing:Listing;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.listing=fakeListings.find(listing=>listing.id===id);
    this.message=`Hi, I'am intrested in your ${this.listing.name.toLowerCase()}!`;
  }
  sendMessage(){
    alert("Your message has been sent");
    this.router.navigateByUrl('/listings');
  }

}
