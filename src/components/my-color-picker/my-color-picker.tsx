import { Component, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-color-picker',
  styleUrl: 'my-color-picker.css',
  shadow: true
})
export class MyColorPicker {

  @Prop({mutable: true}) value: string; 
  @Event() change: EventEmitter;

  private colors = ['red', 'green', 'blue'];

  pickColor(selectedColor) {
    this.value = selectedColor;
    this.change.emit(selectedColor);
  }

  @Watch('value') 
  onValueChange(newValue: string) {
    this.value = newValue;
  }

  render() {
    const colors = this.colors.map(d => 
        <div class={ this.value === d ? 'color-box selected': 'color-box' } style={{ background: d }} onClick={this.pickColor.bind(this, d)}>{d}</div>);

    return <div>{colors}</div>;
  }
}
