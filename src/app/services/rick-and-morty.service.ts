import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // RxJS'den of'ı içe aktarın
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl + 'character');

  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(this.apiUrl + 'character/' + id);
  }
  



  // next ve prev için deneme
  
  // getCharacterById(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}character/${id}`);

  // }
  
  // getNextCharacter(url: string): Observable<any> {
  //   return this.http.get(url);
  // }

  // getPreviousCharacter(url: string): Observable<any> {
  //   return this.http.get(url);
  // }


 
 



 
}
