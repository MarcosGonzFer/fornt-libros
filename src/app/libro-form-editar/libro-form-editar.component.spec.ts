import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroFormEditarComponent } from './libro-form-editar.component';

describe('LibroFormEditarComponent', () => {
  let component: LibroFormEditarComponent;
  let fixture: ComponentFixture<LibroFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroFormEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
