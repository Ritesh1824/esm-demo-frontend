import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHomeComponent } from './sorting-home.component';

describe('SortingHomeComponent', () => {
  let component: SortingHomeComponent;
  let fixture: ComponentFixture<SortingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
