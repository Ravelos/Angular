import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoFormularioComponent } from './segundo-formulario.component';

describe('SegundoFormularioComponent', () => {
  let component: SegundoFormularioComponent;
  let fixture: ComponentFixture<SegundoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
