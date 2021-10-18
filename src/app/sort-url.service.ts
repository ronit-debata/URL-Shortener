import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './model';
@Injectable({
  providedIn: 'root'
})
export class SortURLService {

  UrlData:Array<url> = [];
  constructor(private http:HttpClient) { }

  saveURL(url:url){
    this.UrlData.push(url)
    return this.http.post(`https://616151d7e46acd001777c008.mockapi.io/shorturl`,url)
  }
  getAllURL(){
    return this.http.get<Array<url>>(`https://616151d7e46acd001777c008.mockapi.io/shorturl`)
  }
  updateUrlById(urldata:url,urlId:number|undefined){
    return this.http.put(`https://616151d7e46acd001777c008.mockapi.io/shorturl/${urlId}`,urldata)
  }
  deleteUserById(id:number){
    return this.http.delete(`https://616151d7e46acd001777c008.mockapi.io/shorturl/${id}`)
  }
}
