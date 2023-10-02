import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPostComponent } from './visualizar-post.component';

describe('VisualizarPostComponent', () => {
  let component: VisualizarPostComponent;
  let fixture: ComponentFixture<VisualizarPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarPostComponent]
    });
    fixture = TestBed.createComponent(VisualizarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
