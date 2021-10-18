import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortURLService } from '../sort-url.service';
import { url } from '../model';
import { datecount } from '../model';
@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent implements OnInit {

  flag=0;
  currentdate = new Date(); 
  datetime =  this.currentdate.getDate() + "/"
                + (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear()
  short:string="";
  UrlObject:url={
    "longURL":"",
    "short":"",
    "count":0,
    "time":[]
  }
  count=0
  constructor(private activeRoute: ActivatedRoute,private router:Router,private ShortUrlService:SortURLService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.short = paramsData.id;
      console.log(this.short);
      this.ShortUrlService.getAllURL().subscribe((data) => {
        console.log(data)
        data.forEach((url)=>{
          if(url.short===this.short)
          { 
          console.log(url.time.length);
          for(let i=0;i<url.time.length;i++){
            console.log(url.time[i].datetime)
            console.log(this.datetime)
              if(url.time[i].datetime==this.datetime){
                console.log("data match")
                this.count=url.time[i].count++;
                this.flag=1;
                break;
              }
             }
             if(this.flag==0)
             {
              url.time.push({"datetime":this.datetime,"count":1})
             }
                             
            this.UrlObject={
              "longURL":url.longURL,
              "short":url.short,
              "count":url.count+1,
              "time":url.time
            }
            this.ShortUrlService.updateUrlById(this.UrlObject,url.id).subscribe((data)=>{
              window.location.href = this.UrlObject.longURL;
            })

          }
        })
        
      })
    })
  }

}
