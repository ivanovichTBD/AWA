import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorFilePage } from './profesor-file.page';

describe('ProfesorFilePage', () => {
  let component: ProfesorFilePage;
  let fixture: ComponentFixture<ProfesorFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
