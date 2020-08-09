import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentarionComponent } from './list-comentarion.component';

describe('ListComentarionComponent', () => {
  let component: ListComentarionComponent;
  let fixture: ComponentFixture<ListComentarionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComentarionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComentarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
