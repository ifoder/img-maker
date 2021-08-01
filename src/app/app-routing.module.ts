import { PageImgComponent } from './page-img/page-img.component';
import { MakerComponent } from './maker/maker.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MakerComponent },
  { path: 'new', component: PageImgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
