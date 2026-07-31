import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDaCidade } from './cadastro-da-cidade';

describe('CadastroDaCidade', () => {
  let component: CadastroDaCidade;
  let fixture: ComponentFixture<CadastroDaCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDaCidade],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDaCidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
