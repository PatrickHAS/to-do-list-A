import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddItem } from './input-add-item';

describe('InputAddItem', () => {
  let component: InputAddItem;
  let fixture: ComponentFixture<InputAddItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAddItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAddItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
