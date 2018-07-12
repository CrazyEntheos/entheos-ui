import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenProdListComponent } from './men-prod-list.component';

describe('MenProdListComponent', () => {
  let component: MenProdListComponent;
  let fixture: ComponentFixture<MenProdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenProdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
