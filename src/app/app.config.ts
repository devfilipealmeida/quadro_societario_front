import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';
import { RequestinterceptorService } from './services/requestinterceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideNgxMask({}),
    { provide: HTTP_INTERCEPTORS, useClass: RequestinterceptorService, multi: true }
  ]
};
