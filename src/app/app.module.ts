import { PrintTemplatesComponent } from './share/print-templates/print-templates.component';
import { SingleAppointmentsComponent } from './components/appointments/single-appointments/single-appointments.component';
import { AllAppointmentsComponent } from './components/appointments/all-appointments/all-appointments.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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
import { AllCountriesComponent } from './components/countries/all-countries/all-countries.component';
import { SingleCountriesComponent } from './components/countries/single-countries/single-countries.component';
import { PlayersComponent } from './components/players/players.component';
import { AllPlayersComponent } from './components/players/all-players/all-players.component';
import { SinglePlayersComponent } from './components/players/single-players/single-players.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';
import { ScoutingComponent } from './components/scouting/scouting.component';
import { SingleScoutingComponent } from './components/scouting/single-scouting/single-scouting.component';
import { AllScoutingComponent } from './components/scouting/all-scouting/all-scouting.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AllAgenciesComponent } from './components/agencies/all-agencies/all-agencies.component';
import { SingleAgenciesComponent } from './components/agencies/single-agencies/single-agencies.component';
import { AgencyDetailsComponent } from './components/agencies/agency-details/agency-details.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AllSponsorsComponent } from './components/sponsors/all-sponsors/all-sponsors.component';
import { SingleSponsorComponent } from './components/sponsors/single-sponsor/single-sponsor.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AllDocumentsComponent } from './components/documents/all-documents/all-documents.component';
import { SingleDocumentComponent } from './components/documents/single-document/single-document.component';
import { SettingComponent } from './components/setting/setting.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SponsorDetailsComponent } from './components/sponsors/sponsor-details/sponsor-details.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';
import { SingleSubAdminComponent } from './components/sub-admin/single-sub-admin/single-sub-admin.component';
import { AllSubAdminComponent } from './components/sub-admin/all-sub-admin/all-sub-admin.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CaptchaModule } from 'primeng/captcha';
import { ViewScoutingComponent } from './components/scouting/view-scouting/view-scouting.component';
import { DatePipe } from '@angular/common';
import { ClubsComponent } from './components/clubs/clubs.component';
import { AllClubsComponent } from './components/clubs/all-clubs/all-clubs.component';
import { SingleClubsComponent } from './components/clubs/single-clubs/single-clubs.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AllPartnersComponent } from './components/partners/all-partners/all-partners.component';
import { SinglePartnersComponent } from './components/partners/single-partners/single-partners.component';
import { PlayerreportComponent } from './share/print-templates/playerreport/playerreport.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

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
    AllCountriesComponent,
    SingleCountriesComponent,
    PlayersComponent,
    AllPlayersComponent,
    SinglePlayersComponent,
    PlayerDetailsComponent,
    ScoutingComponent,
    SingleScoutingComponent,
    AllScoutingComponent,
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
    SponsorDetailsComponent,
    SubAdminComponent,
    SingleSubAdminComponent,
    AllSubAdminComponent,
    ViewScoutingComponent,
    AppointmentsComponent,
    AllAppointmentsComponent,
    SingleAppointmentsComponent,
    ClubsComponent,
    AllClubsComponent,
    SingleClubsComponent,
    PartnersComponent,
    AllPartnersComponent,
    SinglePartnersComponent,
    PrintTemplatesComponent,
    PlayerreportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxUiLoaderModule,
    ToastModule,
    RippleModule,
    PasswordModule,
    InputTextModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    TableModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    ProgressBarModule,
    CheckboxModule,
    CaptchaModule,
    NgxStarRatingModule,
    MultiSelectModule
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
