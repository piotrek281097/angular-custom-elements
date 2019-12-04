import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [ContactCardComponent],
  providers: [],
})
export class AppModule implements DoBootstrap{

  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void {
    const el = createCustomElement(ContactCardComponent, { injector: this.injector });
    customElements.define('custom-contact-card', el);
  } 
}
