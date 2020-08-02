import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursosProfesorPage } from './cursos-profesor.page';

describe('CursosProfesorPage', () => {
  let component: CursosProfesorPage;
  let fixture: ComponentFixture<CursosProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursosProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
