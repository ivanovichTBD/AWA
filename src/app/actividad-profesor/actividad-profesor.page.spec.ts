import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActividadProfesorPage } from './actividad-profesor.page';

describe('ActividadProfesorPage', () => {
  let component: ActividadProfesorPage;
  let fixture: ComponentFixture<ActividadProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
