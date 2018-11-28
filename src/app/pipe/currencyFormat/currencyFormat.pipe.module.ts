import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CurrencyFormatPipe} from "./currencyFormat.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencyFormatPipe
  ],
  exports: [
    CurrencyFormatPipe
  ]
})
export class CurrencyFormatPipeModule {

}
