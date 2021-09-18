import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsProducsPage } from './details-producs.page';

describe('DetailsProducsPage', () => {
  let component: DetailsProducsPage;
  let fixture: ComponentFixture<DetailsProducsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProducsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsProducsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
