import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesMaPage } from './lista-estudiantes-ma.page';

describe('ListaEstudiantesMaPage', () => {
  let component: ListaEstudiantesMaPage;
  let fixture: ComponentFixture<ListaEstudiantesMaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesMaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesMaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
