import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent {
  @Input() label: string  = "RandomButtonLabel";
  @Output() onClick = new EventEmitter<any>();


 

  constructor() {}

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
