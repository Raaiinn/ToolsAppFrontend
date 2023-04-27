import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { User } from './user';
import { Observable } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let user: 'root';
  let authenticatedUser : User;
  let pwd: 'password';
  let token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJ1c2VySldUIiwic3ViIjoicm9vdCIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2ODI1NTU4ODMsImV4cCI6MTY4MjU1NjQ4M30.O0-gEKqxg_kUMFVfeRYlsThaBGTf5XfI1H1H7SxkNZTfj8SxypNQtgKrm0uy8bzaJ18ITuHiQ57DAWRAV_HPoQ'


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Successful login against the service', ()=>{
    service.login(user,pwd).subscribe(
      data=>{
        console.log(data);
        expect(data.token).toBe(token);
      }
    )
  })
});
