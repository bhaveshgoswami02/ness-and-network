import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AgencyDetailsComponent } from './components/agencies/agency-details/agency-details.component';
import { AllAgenciesComponent } from './components/agencies/all-agencies/all-agencies.component';
import { SingleAgenciesComponent } from './components/agencies/single-agencies/single-agencies.component';
import { ComponentsComponent } from './components/components.component';
import { AllCountriesComponent } from './components/countries/all-countries/all-countries.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SingleCountriesComponent } from './components/countries/single-countries/single-countries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllDocumentsComponent } from './components/documents/all-documents/all-documents.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { SingleDocumentComponent } from './components/documents/single-document/single-document.component';
import { AllPlayersComponent } from './components/players/all-players/all-players.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayersComponent } from './components/players/single-players/single-players.component';
import { AllScoutingComponent } from './components/scouting/all-scouting/all-scouting.component';
import { ScoutingComponent } from './components/scouting/scouting.component';
import { SingleScoutingComponent } from './components/scouting/single-scouting/single-scouting.component';
import { SettingComponent } from './components/setting/setting.component';
import { AllSponsorsComponent } from './components/sponsors/all-sponsors/all-sponsors.component';
import { SingleSponsorComponent } from './components/sponsors/single-sponsor/single-sponsor.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AllSubAdminComponent } from './components/sub-admin/all-sub-admin/all-sub-admin.component';
import { SingleSubAdminComponent } from './components/sub-admin/single-sub-admin/single-sub-admin.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: "full" },
  {
    path: '', component: ComponentsComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'agencies', component: AgenciesComponent, children: [
          { path: '', component: AllAgenciesComponent },
          { path: 'add', component: SingleAgenciesComponent },
          { path: 'edit/:id', component: SingleAgenciesComponent },
          { path: 'detail/:id', component: AgencyDetailsComponent },
        ]
      },
      {
        path: 'countries', component: CountriesComponent, children: [
          { path: '', component: AllCountriesComponent },
          { path: 'add', component: SingleCountriesComponent },
          { path: 'edit/:id', component: SingleCountriesComponent },
        ]
      },
      {
        path: 'documents', component: DocumentsComponent, children: [
          { path: '', component: AllDocumentsComponent },
          { path: 'add', component: SingleDocumentComponent },
          { path: 'edit/:id', component: SingleDocumentComponent },
        ]
      },
      {
        path: 'players', component: PlayersComponent, children: [
          { path: '', component: AllPlayersComponent },
          { path: 'add', component: SinglePlayersComponent },
          { path: 'edit/:id', component: SinglePlayersComponent },
          { path: 'detail/:id', component: PlayerDetailsComponent },
        ]
      },
      {
        path: 'scouting', component: ScoutingComponent, children: [
          { path: '', component: AllScoutingComponent },
          { path: 'add', component: SingleScoutingComponent },
          { path: 'edit/:id', component: SingleScoutingComponent }
        ]
      },
      { path: 'setting', component: SettingComponent },
      {
        path: 'sponsors', component: SponsorsComponent, children: [
          { path: '', component: AllSponsorsComponent },
          { path: 'add', component: SingleSponsorComponent },
          { path: 'edit/:id', component: SingleSponsorComponent },
        ]
      },
      {
        path: 'sub-admin', component: SubAdminComponent, children: [
          { path: '', component: AllSubAdminComponent },
          { path: 'add', component: SingleSubAdminComponent },
          { path: 'edit/:id', component: SingleSubAdminComponent },
        ]
      }
    ]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
