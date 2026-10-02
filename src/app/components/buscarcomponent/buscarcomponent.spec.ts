import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Buscarcomponent } from './buscarcomponent';

describe('Buscarcomponent', () => {
  let component: Buscarcomponent;
  let fixture: ComponentFixture<Buscarcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Buscarcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Buscarcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
