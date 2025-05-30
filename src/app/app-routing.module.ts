import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './body/resume/resume.component';
import { ProjetsComponent } from './body/projets/projets.component';
import { ContactComponent } from './body/contact/contact.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
