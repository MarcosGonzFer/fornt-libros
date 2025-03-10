import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloListComponent } from './capitulo-list.component';

describe('CapituloListComponent', () => {
  let component: CapituloListComponent;
  let fixture: ComponentFixture<CapituloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapituloListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
