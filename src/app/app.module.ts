import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { NavElComponent } from './components/nav-el/nav-el.component';
import { ListOfElementsComponent } from './components/list-of-elements/list-of-elements.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ProfileDropCardComponent } from './components/profile-drop-card/profile-drop-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CustomTagComponent } from './components/custom-tag/custom-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    StatCardComponent,
    NavElComponent,
    ListOfElementsComponent,
    PieChartComponent,
    ProfileDropCardComponent,
    BarChartComponent,
    CustomTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
