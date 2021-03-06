import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

//
// Documentation Auxietre Francois composant ModelFiche création Etienne
// ce composant permet de gérer les pnj et les pj dans le jeu


import { ModelFicheComponent } from './model-fiche.component';

describe('ModelFicheComponent', () => {
  let component: ModelFicheComponent;
  let fixture: ComponentFixture<ModelFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
