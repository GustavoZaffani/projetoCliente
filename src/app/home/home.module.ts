import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SidenavModule} from '../sidenav/sidenav.module';
import {ToolbarrModule} from '../toolbar/toolbar.module';
import {CompraModule} from '../compra/compra.module';
import {CardModule} from 'primeng/card';
import {VendaModule} from '../venda/venda.module';
import {PessoaModule} from '../pessoa/pessoa.module';
import {InputMaskModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SidenavModule,
    ToolbarrModule,
    CompraModule,
    CardModule,
    VendaModule,
    InputMaskModule,
    PessoaModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
