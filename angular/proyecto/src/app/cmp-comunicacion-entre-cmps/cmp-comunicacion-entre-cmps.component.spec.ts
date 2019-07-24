import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps.component';

describe('CmpComunicacionEntreCmpsComponent', () => {
  let component: CmpComunicacionEntreCmpsComponent;
  let fixture: ComponentFixture<CmpComunicacionEntreCmpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpComunicacionEntreCmpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComunicacionEntreCmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
