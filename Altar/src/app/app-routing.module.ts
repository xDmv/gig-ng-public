import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './pages/generator/generator.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ErorComponent } from './pages/eror/eror.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/generator', 
    pathMatch:'full'
	},
	{
		path: 'generator',
		component: GeneratorComponent
  },
  {
		path: 'payments',
		component: PaymentsComponent
	},
	{
		path: '**',
		component: ErorComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
