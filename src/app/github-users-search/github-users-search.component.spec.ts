import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersSearchComponent } from './github-users-search.component';

describe('GithubUsersSearchComponent', () => {
  let component: GithubUsersSearchComponent;
  let fixture: ComponentFixture<GithubUsersSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
