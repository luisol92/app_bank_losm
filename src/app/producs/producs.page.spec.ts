import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducsPage } from './producs.page';

describe('ProducsPage', () => {
  let component: ProducsPage;
  let fixture: ComponentFixture<ProducsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
