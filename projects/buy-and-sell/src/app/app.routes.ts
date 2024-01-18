import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

export const routes: Routes = [
    {path:'listings', component:ListingsPageComponent,pathMatch:'full'},
    {path:'listings/:id',component:ListingDetailsPageComponent},
    {path:'contact/:id',component:ContactPageComponent},
    {path:'edit-listing/:id',component:EditListingPageComponent},
    {path:'my-listings',component:MyListingsPageComponent,
    {path:'new-listing',component:NewListingPageComponent}

];
