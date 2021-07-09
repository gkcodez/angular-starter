import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoggingService } from './services/logging.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountCardComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
