import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-on-off-switch',
  templateUrl: `./on-off-switch.component.html`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OnOffSwitchComponent),
      multi: true
    }
  ]
})
export class OnOffSwitchComponent {

  @Input() public isOn: boolean = false;
  @Input() public onText: string = 'On';
  @Input() public offText: string = 'Off'
  

  constructor() { }

  onToggleSwitch() {
    this.isOn = !this.isOn;
  }
}