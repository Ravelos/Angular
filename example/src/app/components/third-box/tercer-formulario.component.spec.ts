import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerFormularioComponent } from './tercer-formulario.component';

describe('TercerFormularioComponent', () => {
  let component: TercerFormularioComponent;
  let fixture: ComponentFixture<TercerFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
