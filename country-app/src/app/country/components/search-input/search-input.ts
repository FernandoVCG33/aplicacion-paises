import {Component, effect, EventEmitter, input, linkedSignal, Output, signal} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  @Output() value = new EventEmitter<string>();
  placeholder=input('Buscar');
  inputValue=linkedSignal<string>(()=> this.initialValue());
  initialValue=input<string>('');
  debounceEffect=effect((onCleanup)=>{
    const value=this.inputValue();
    const timeOut=setTimeout(()=>{
      this.value.emit(value);
    },500);
    onCleanup(() =>{
      clearTimeout(timeOut);
    });
  })
}
