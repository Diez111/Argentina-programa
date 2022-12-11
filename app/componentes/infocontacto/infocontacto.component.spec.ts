import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocontactoComponent } from './infocontacto.component';

describe('InfocontactoComponent', () => {
  let component: InfocontactoComponent;
  let fixture: ComponentFixture<InfocontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
