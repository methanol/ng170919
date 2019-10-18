import { Component, forwardRef, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type Cb = (checked: boolean) => void;

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked!: boolean;
  private onChangeCb!: Cb;

  @HostListener('click')
  public toggle(): void {
    this.checked = !this.checked;
    this.onChangeCb(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }

  public registerOnChange(fn: Cb): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(fn: Cb): void {
  }
}
