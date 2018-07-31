import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';


@Injectable()
export class DataService {

  constructor(private http:Http) { }
  uploadDatasource(payload): Observable<any[]> {
    let headers = new Headers();

    headers.append('Accept', 'application/json, text/plain,');
    let options = new RequestOptions({ headers: headers });


    return this.http.post(`API_UPLOAD_PATH`,payload, options)
      .map((res: Response) => {
        let data = res.json();
        return data;
      })
      .catch(error => Observable.throw(error))

  }

}
