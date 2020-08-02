import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorSeguimientoPage } from './profesor-seguimiento.page';

describe('ProfesorSeguimientoPage', () => {
  let component: ProfesorSeguimientoPage;
  let fixture: ComponentFixture<ProfesorSeguimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorSeguimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorSeguimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
