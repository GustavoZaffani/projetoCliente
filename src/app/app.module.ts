import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SidenavModule} from './sidenav/sidenav.module';
import {ToolbarrModule} from './toolbar/toolbar.module';
import {CompraModule} from './compra/compra.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {VendaModule} from './venda/venda.module';
import {PessoaModule} from './pessoa/pessoa.module';
import {AppRoutingModule} from './app.routing.module';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidenavModule,
    ToolbarrModule,
    CompraModule,
    ConfirmDialogModule,
    HomeModule,
    VendaModule,
    PessoaModule,
    AppRoutingModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
