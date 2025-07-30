import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroLiterarioComponent } from './genero-literario';

describe('GeneroLiterario', () => {
  let component: GeneroLiterarioComponent;
  let fixture: ComponentFixture<GeneroLiterarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroLiterarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroLiterarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
