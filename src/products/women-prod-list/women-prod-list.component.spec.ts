import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProdListComponent } from './women-prod-list.component';

describe('WomenProdListComponent', () => {
  let component: WomenProdListComponent;
  let fixture: ComponentFixture<WomenProdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenProdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
