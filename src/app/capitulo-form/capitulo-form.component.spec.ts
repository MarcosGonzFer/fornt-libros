import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloFormComponent } from './capitulo-form.component';

describe('CapituloFormComponent', () => {
  let component: CapituloFormComponent;
  let fixture: ComponentFixture<CapituloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
