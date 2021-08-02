import { CreateHtmlComponent } from './create-html/create-html.component';
import { MakerComponent } from './maker/maker.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MakerComponent },
  { path: 'html', component: CreateHtmlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
