import { CampaignComponent } from './components/structural/campaign/campaign.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactdetailComponent } from './components/contact-related/contactdetail/contactdetail.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact-related/contact/contact.component';
import { HomeComponent } from './components/structural/home/home.component';
import { GenerateTurfComponent } from './components/generate-turf/generate-turf.component';
import { CreateContactComponent } from './components/contact-related/create-contact/create-contact.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'createcontact',
    component: CreateContactComponent
  },
  {
    path: 'turf',
    component: GenerateTurfComponent
  },
  {
    path: 'contactdetail/:id',
    component: ContactdetailComponent
  },
  {
    path: 'editcontact/:id',
    component: EditContactComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
