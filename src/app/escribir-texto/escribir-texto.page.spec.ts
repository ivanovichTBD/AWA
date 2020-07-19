import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscribirTextoPage } from './escribir-texto.page';

describe('EscribirTextoPage', () => {
  let component: EscribirTextoPage;
  let fixture: ComponentFixture<EscribirTextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscribirTextoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscribirTextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
