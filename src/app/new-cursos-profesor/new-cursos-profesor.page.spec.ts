import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCursosProfesorPage } from './new-cursos-profesor.page';

describe('NewCursosProfesorPage', () => {
  let component: NewCursosProfesorPage;
  let fixture: ComponentFixture<NewCursosProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCursosProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCursosProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
