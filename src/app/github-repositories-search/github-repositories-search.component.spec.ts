import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoriesSearchComponent } from './github-repositories-search.component';

describe('GithubRepositoriesSearchComponent', () => {
  let component: GithubRepositoriesSearchComponent;
  let fixture: ComponentFixture<GithubRepositoriesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositoriesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepositoriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
