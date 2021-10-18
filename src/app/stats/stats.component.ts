import { Component, OnInit } from '@angular/core';
import { SortURLService } from '../sort-url.service';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from '../model';
import { urlChart } from '../model';
import { datecount } from '../model';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  short=""
  urlData:Array<urlChart>=[]
  constructor(private activeRoute: ActivatedRoute,private router:Router,private ShortUrlService:SortURLService) { }
  view:any = [900, 250];
  count=0
  href=""
  longurl=""
  shorturl=""
  createdAt:String=""
// options
showXAxis = true;
showYAxis = true;
gradient = false;
showXAxisLabel = true;
xAxisLabel = 'Date';
showYAxisLabel = true;
yAxisLabel = 'No. of Clicks';

colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.short = paramsData.id;
      console.log(this.short);
      this.ShortUrlService.getAllURL().subscribe((data) => {
        console.log(data);
        data.forEach((url)=>{
          if(this.short==url.short){
            this.count=url.count
            this.longurl=this.truncate(url.longURL)
            this.createdAt=url.time[0].datetime
            this.shorturl=url.short
            this.href=url.longURL
            url.time.forEach((urltime)=>{
              this.urlData.push({"name":urltime.datetime,"value":urltime.count})
            })
            
          }
        })
      })
    })
  }
  truncate(str:string){
    let n=80;
    return (str.length > n) ? str.substr(0, n-1) + '....' : str;
  };
}
