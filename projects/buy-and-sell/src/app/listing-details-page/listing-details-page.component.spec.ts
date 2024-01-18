import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsPageComponent } from './listing-details-page.component';

describe('ListingDetailsPageComponent', () => {
  let component: ListingDetailsPageComponent;
  let fixture: ComponentFixture<ListingDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
