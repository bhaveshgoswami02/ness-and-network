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
import { AllAppointmentsComponent } from './components/appointments/all-appointments/all-appointments.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { SingleAppointmentsComponent } from './components/appointments/single-appointments/single-appointments.component';
import { AllClubsComponent } from './components/clubs/all-clubs/all-clubs.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { SingleClubsComponent } from './components/clubs/single-clubs/single-clubs.component';
import { ComponentsComponent } from './components/components.component';
import { AllCountriesComponent } from './components/countries/all-countries/all-countries.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SingleCountriesComponent } from './components/countries/single-countries/single-countries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllDocumentsComponent } from './components/documents/all-documents/all-documents.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { SingleDocumentComponent } from './components/documents/single-document/single-document.component';
import { AllPartnersComponent } from './components/partners/all-partners/all-partners.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SinglePartnersComponent } from './components/partners/single-partners/single-partners.component';
import { AllPlayersComponent } from './components/players/all-players/all-players.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayersComponent } from './components/players/single-players/single-players.component';
import { AllScoutingComponent } from './components/scouting/all-scouting/all-scouting.component';
import { ScoutingComponent } from './components/scouting/scouting.component';
import { SingleScoutingComponent } from './components/scouting/single-scouting/single-scouting.component';
import { ViewScoutingComponent } from './components/scouting/view-scouting/view-scouting.component';
import { SettingComponent } from './components/setting/setting.component';
import { AllSponsorsComponent } from './components/sponsors/all-sponsors/all-sponsors.component';
import { SingleSponsorComponent } from './components/sponsors/single-sponsor/single-sponsor.component';
import { SponsorDetailsComponent } from './components/sponsors/sponsor-details/sponsor-details.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AllSubAdminComponent } from './components/sub-admin/all-sub-admin/all-sub-admin.component';
import { SingleSubAdminComponent } from './components/sub-admin/single-sub-admin/single-sub-admin.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SuccessComponent } from './share/success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: "full" },
  {
    path: '', component: ComponentsComponent, canActivate: [AuthGuardService], children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'agencies', component: AgenciesComponent, children: [
          { path: '', component: AllAgenciesComponent },
          { path: 'add', component: SingleAgenciesComponent },
          { path: 'edit/:id', component: SingleAgenciesComponent },
          { path: 'detail/:id', component: AgencyDetailsComponent },
          {
            path: 'clubs', component: ClubsComponent, children: [
              { path: '', component: AllClubsComponent },
              { path: 'add', component: SingleClubsComponent },
              { path: 'edit/:id', component: SingleClubsComponent },
            ]
          },
          {
            path: 'partners', component: PartnersComponent, children: [
              { path: '', component: AllPartnersComponent },
              { path: 'add', component: SinglePartnersComponent },
              { path: 'edit/:id', component: SinglePartnersComponent },
            ]
          },
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
        path: 'appointments', component: AppointmentsComponent, children: [
          { path: '', component: AllAppointmentsComponent },
          { path: 'add', component: SingleAppointmentsComponent },
          { path: 'edit/:id', component: SingleAppointmentsComponent },
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
          { path: 'detail', component: PlayerDetailsComponent },
          { path: 'detail/:id', component: PlayerDetailsComponent },
        ]
      },
      {
        path: 'scouting', component: ScoutingComponent, children: [
          { path: '', component: AllScoutingComponent },
          { path: 'add', component: SingleScoutingComponent },
          { path: 'edit/:id', component: SingleScoutingComponent },
          { path: 'detail/:id', component: ViewScoutingComponent },
        ]
      },
      { path: 'setting', component: SettingComponent },
      {
        path: 'sponsors', component: SponsorsComponent, children: [
          { path: '', component: AllSponsorsComponent },
          { path: 'add', component: SingleSponsorComponent },
          { path: 'edit/:id', component: SingleSponsorComponent },
          { path: 'detail/:id', component: SponsorDetailsComponent }
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
      { path: 'success', component: SuccessComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
