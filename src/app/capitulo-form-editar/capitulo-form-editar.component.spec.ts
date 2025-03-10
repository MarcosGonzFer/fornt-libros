import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloFormEditarComponent } from './capitulo-form-editar.component';

describe('CapituloFormEditarComponent', () => {
  let component: CapituloFormEditarComponent;
  let fixture: ComponentFixture<CapituloFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloFormEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
