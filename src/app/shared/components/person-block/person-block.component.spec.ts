import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBlockComponent } from './person-block.component';

describe('PersonBlockComponent', () => {
  let component: PersonBlockComponent;
  let fixture: ComponentFixture<PersonBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
