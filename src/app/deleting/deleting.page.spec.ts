import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletingPage } from './deleting.page';

describe('DeletingPage', () => {
  let component: DeletingPage;
  let fixture: ComponentFixture<DeletingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
