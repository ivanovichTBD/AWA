import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorTextoPage } from './profesor-texto.page';

describe('ProfesorTextoPage', () => {
  let component: ProfesorTextoPage;
  let fixture: ComponentFixture<ProfesorTextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorTextoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorTextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
