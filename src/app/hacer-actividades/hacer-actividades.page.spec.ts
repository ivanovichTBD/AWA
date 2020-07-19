import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HacerActividadesPage } from './hacer-actividades.page';

describe('HacerActividadesPage', () => {
  let component: HacerActividadesPage;
  let fixture: ComponentFixture<HacerActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HacerActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
