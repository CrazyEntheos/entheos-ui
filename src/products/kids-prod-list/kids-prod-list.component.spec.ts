import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsProdListComponent } from './kids-prod-list.component';

describe('KidsProdListComponent', () => {
  let component: KidsProdListComponent;
  let fixture: ComponentFixture<KidsProdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsProdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
