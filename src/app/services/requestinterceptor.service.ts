import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class RequestinterceptorService implements HttpInterceptor {

  constructor(private messagesService: MessagesService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messagesService.add('Ah não! Ocorreu um erro ao processar sua solicitação. Tente novamente.')
        return throwError(error);
      })
    );
  }
  
}
