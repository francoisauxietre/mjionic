import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelFicheEquipementComponent } from './model-fiche-equipement.component';

describe('ModelFicheEquipementComponent', () => {
  let component: ModelFicheEquipementComponent;
  let fixture: ComponentFixture<ModelFicheEquipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheEquipementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelFicheEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
