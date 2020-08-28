import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetownersComponent } from './getowners.component';

describe('GetownersComponent', () => {
  let component: GetownersComponent;
  let fixture: ComponentFixture<GetownersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetownersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
