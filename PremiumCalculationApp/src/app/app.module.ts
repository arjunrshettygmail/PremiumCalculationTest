import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PremiumBaseComponent } from './premiums/premiumBase.component';
import { PremiumComponent } from './premiums/premium/premium.component';
import { PremiumService } from './shared/premium.service';
import { OnlyNumber } from './shared/OnlyNumber.directive';



@NgModule({
  declarations: [
    AppComponent,
    PremiumBaseComponent,
    PremiumComponent,
    OnlyNumber,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PremiumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
