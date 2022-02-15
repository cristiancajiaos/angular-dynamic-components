import { DialogModule } from './dialog/dialog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
