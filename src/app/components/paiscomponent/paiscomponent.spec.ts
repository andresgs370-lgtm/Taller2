import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paiscomponent } from './paiscomponent';

describe('Paiscomponent', () => {
  let component: Paiscomponent;
  let fixture: ComponentFixture<Paiscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paiscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Paiscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
