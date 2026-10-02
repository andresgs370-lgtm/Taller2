import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paginacomponents } from './paginacomponents';

describe('Paginacomponents', () => {
  let component: Paginacomponents;
  let fixture: ComponentFixture<Paginacomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paginacomponents],
    }).compileComponents();

    fixture = TestBed.createComponent(Paginacomponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
