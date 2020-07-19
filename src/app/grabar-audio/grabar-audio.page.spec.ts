import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrabarAudioPage } from './grabar-audio.page';

describe('GrabarAudioPage', () => {
  let component: GrabarAudioPage;
  let fixture: ComponentFixture<GrabarAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabarAudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrabarAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
