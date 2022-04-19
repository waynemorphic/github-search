import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryResultComponent } from './repository-result.component';

describe('RepositoryResultComponent', () => {
  let component: RepositoryResultComponent;
  let fixture: ComponentFixture<RepositoryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
