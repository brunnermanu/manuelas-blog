import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreViewComponent } from './article-pre-view.component';

describe('ArticlePreViewComponent', () => {
  let component: ArticlePreViewComponent;
  let fixture: ComponentFixture<ArticlePreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePreViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
