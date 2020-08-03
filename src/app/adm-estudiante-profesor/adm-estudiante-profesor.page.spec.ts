import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmEstudianteProfesorPage } from './adm-estudiante-profesor.page';

describe('AdmEstudianteProfesorPage', () => {
  let component: AdmEstudianteProfesorPage;
  let fixture: ComponentFixture<AdmEstudianteProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEstudianteProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmEstudianteProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
