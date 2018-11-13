import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule, ButtonModule, InputMaskModule, TooltipModule} from 'primeng/primeng';
import {PessoaFormComponent} from './pessoa.form.component';
import {PessoaListComponent} from './pessoa.list.component';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {TableModule} from 'primeng/table';
import {PessoaService} from './pessoa.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule ({
  imports: [
    CommonModule,
    CardModule,
    TooltipModule,
    ButtonModule,
    InputMaskModule,
    AutoCompleteModule,
    ToolbarrModule,
    TableModule,
    HttpClientModule
  ],
  declarations: [
    PessoaFormComponent,
    PessoaListComponent
  ],
  exports: [
    PessoaFormComponent,
    PessoaListComponent
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule {
}