import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'about-me',
  component: AboutMeComponent
}, {
  path: 'projects',
  component: ProjectsComponent
}, {
  path: 'contact-me',
  component: ContactMeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
