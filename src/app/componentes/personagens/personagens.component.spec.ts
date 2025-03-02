import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensComponent } from './personagens.component';

describe('PersonagensComponent', () => {
  let component: PersonagensComponent;
  let fixture: ComponentFixture<PersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
