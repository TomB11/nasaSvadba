import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { TimeLocationComponent } from './sections/time-location/time-location.component';
import { WeddingFormComponent } from './sections/wedding-form/wedding-form.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { TimeLineMomentComponent } from './components/time-line-moment/time-line-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutUsComponent,
    TimeLocationComponent,
    WeddingFormComponent,
    ContactComponent,
    SeparatorComponent,
    TimeLineMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
