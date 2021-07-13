import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-class-display',
  // template: `{{el.className}}`,
  template: `
      <h3>dirty: {{ property.dirty }}</h3>
      <h3>pristine: {{ property.pristine }}</h3>
      <h3>touched: {{ property.touched }}</h3>
      <h3>untouched: {{ property.untouched }}</h3>
      <h3>valid: {{ property.valid }}</h3>
      <h3>invalid: {{ property.invalid }}</h3>
  `
})
export class ClassDisplayComponent implements OnInit {

  // @Input() el: Element;
  @Input() property: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

}
