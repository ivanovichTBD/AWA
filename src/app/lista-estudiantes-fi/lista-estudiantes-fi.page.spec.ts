import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesFiPage } from './lista-estudiantes-fi.page';

describe('ListaEstudiantesFiPage', () => {
  let component: ListaEstudiantesFiPage;
  let fixture: ComponentFixture<ListaEstudiantesFiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesFiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesFiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
