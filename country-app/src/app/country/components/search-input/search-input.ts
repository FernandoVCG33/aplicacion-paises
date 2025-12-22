import {Component, effect, EventEmitter, input, Output, signal} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  @Output() value = new EventEmitter<string>();
  placeholder=input('Buscar');
  inputValue=signal<string>('');

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
