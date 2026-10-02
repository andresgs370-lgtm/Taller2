import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paisescomponent } from './paisescomponent';

describe('Paisescomponent', () => {
  let component: Paisescomponent;
  let fixture: ComponentFixture<Paisescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paisescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Paisescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
