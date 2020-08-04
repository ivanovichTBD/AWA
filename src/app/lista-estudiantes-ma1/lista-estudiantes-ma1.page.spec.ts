import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEstudiantesMa1Page } from './lista-estudiantes-ma1.page';

describe('ListaEstudiantesMa1Page', () => {
  let component: ListaEstudiantesMa1Page;
  let fixture: ComponentFixture<ListaEstudiantesMa1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesMa1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantesMa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
