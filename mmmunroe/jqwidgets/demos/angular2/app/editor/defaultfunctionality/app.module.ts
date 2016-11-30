import { NgModule}       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxEditorComponent } from 'components/angular_jqxeditor';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxEditorComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

