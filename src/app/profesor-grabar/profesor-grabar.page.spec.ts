import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorGrabarPage } from './profesor-grabar.page';

describe('ProfesorGrabarPage', () => {
  let component: ProfesorGrabarPage;
  let fixture: ComponentFixture<ProfesorGrabarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorGrabarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorGrabarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
