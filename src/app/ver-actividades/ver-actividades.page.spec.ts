import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerActividadesPage } from './ver-actividades.page';

describe('VerActividadesPage', () => {
  let component: VerActividadesPage;
  let fixture: ComponentFixture<VerActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
