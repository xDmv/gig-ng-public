import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ErorComponent } from './pages/eror/eror.component';
import { GridComponent } from './pages/payments/grid/grid.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		GeneratorComponent,
		PaymentsComponent,
		ErorComponent,
		GridComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
