import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDetailComponent } from './command-detail.component';

describe('CommandDetailComponent', () => {
  let component: CommandDetailComponent;
  let fixture: ComponentFixture<CommandDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
