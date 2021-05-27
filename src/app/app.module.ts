import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ComponentsComponent } from './components/components.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './share/header/header.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { SuccessComponent } from './share/success/success.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SingleCountryComponent } from './components/countries/single-country/single-country.component';
import { AllCountriesComponent } from './components/countries/all-countries/all-countries.component';
import { PlayersComponent } from './components/players/players.component';
import { AllPlayersComponent } from './components/players/all-players/all-players.component';
import { SinglePlayerComponent } from './components/players/single-player/single-player.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { ScoutingComponent } from './components/scouting/scouting.component';
import { AllScoutingComponent } from './components/all-scouting/all-scouting.component';
import { SingleScoutingComponent } from './components/single-scouting/single-scouting.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AllAgenciesComponent } from './components/all-agencies/all-agencies.component';
import { SingleAgenciesComponent } from './components/single-agencies/single-agencies.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AllSponsorsComponent } from './components/all-sponsors/all-sponsors.component';
import { SingleSponsorComponent } from './components/single-sponsor/single-sponsor.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import { SingleDocumentComponent } from './components/single-document/single-document.component';
import { SettingComponent } from './components/setting/setting.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';
import { SingleSubAdminComponent } from './components/single-sub-admin/single-sub-admin.component';
import { AllSubAdminComponent } from './components/all-sub-admin/all-sub-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ComponentsComponent,
    HeaderComponent,
    SidebarComponent,
    SuccessComponent,
    DashboardComponent,
    CountriesComponent,
    SingleCountryComponent,
    AllCountriesComponent,
    PlayersComponent,
    AllPlayersComponent,
    SinglePlayerComponent,
    PlayerDetailsComponent,
    ScoutingComponent,
    AllScoutingComponent,
    SingleScoutingComponent,
    AgenciesComponent,
    AllAgenciesComponent,
    SingleAgenciesComponent,
    AgencyDetailsComponent,
    SponsorsComponent,
    AllSponsorsComponent,
    SingleSponsorComponent,
    DocumentsComponent,
    AllDocumentsComponent,
    SingleDocumentComponent,
    SettingComponent,
    SubAdminComponent,
    SingleSubAdminComponent,
    AllSubAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
