import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,NbRouteTabsetModule,NbTabsetModule,NbLayoutModule, NbCardModule, NbSpinnerModule, NbMenuModule, NbToastrModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AngularSplitModule } from 'angular-split';
import { TableModule } from 'primeng/table';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NbDialogModule } from '@nebular/theme';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    TranslateModule.forRoot(),
    HttpClientModule,
    NbTabsetModule,
    NbCardModule,
    NbRouteTabsetModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
