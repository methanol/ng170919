import { ICartProduct } from '@store/reducers/cart.reducer';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

const product: ICartProduct = {
  author: 'Vlad',
  img: 'assets/img/product-2.jpg',
  isFavorite: false,
  price: 221,
  title: 'Product 1',
  _id: '5dbc40267a191bd0a9c32ca9',
  count: 1
};
const accessToken: string = '123sadsadqwesq2314afq2141saa142515';
describe('Interceptor', () => {
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: BASE_URL_TOKEN, useValue: BASE_URL, multi: true},
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        }
      ],
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
    localStorage.setItem('accessToken', accessToken);
  });
  it('should not have Authorization header', inject([AuthService, BASE_URL_TOKEN],
    (authService: AuthService, baseUrl: string) => {
      const url: string = `${baseUrl}/auth/signin`;
      authService.login({}).subscribe();
      const httpRequest: TestRequest = httpMock.expectOne({
        url,
        method: 'POST'
      });
      expect(httpRequest.request.headers.has('Authorization')).toBeFalsy();
    }));
  it('should  have Authorization header', inject([AuthService, BASE_URL_TOKEN],
    (authService: AuthService, baseUrl: string) => {
      const url: string = `${baseUrl}/user/checkuser`;
      authService.checkUser().subscribe();
      const httpRequest: TestRequest = httpMock.expectOne({
        url,
        method: 'GET'
      });
      expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
      expect(httpRequest.request.headers.get('Authorization')).toEqual(`Bearer ${accessToken}`);
    }));
});
