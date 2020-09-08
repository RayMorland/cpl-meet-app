import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'electron-app';
  meets: any;
  meetsReady = false;
  constructor(
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef
  ){}

  ngOnInit() {
    this.getMeets().subscribe(res => {
      this.meets = res;
      console.log(this.meets);
      this.meetsReady = true;
      this.changeDetector.detectChanges();
    });
  }

  public getMeets(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getmeets', {});
  }
}
