import {Injectable} from '@angular/core';
import {Awsome} from './awsome';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwsomeService {
  private awsomeList: Awsome[];
  private awsomeApiUrl = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  setAWsomeList(awsomes: Awsome[]) {
    this.awsomeList = awsomes;
  }

  getCurrentAwsomeList() {
    return this.awsomeList;
  }

  getAwsomeList(): Observable<Awsome[]> {
    return this.http.get<Awsome[]>(this.awsomeApiUrl);
  }

  deleteAwsome(awsome: Awsome) {
    return this.http.delete(this.awsomeApiUrl + '/' + awsome.id);
  }

  addAwsome(awsome: Awsome) {
    awsome.id = this.awsomeList[this.awsomeList.length - 1].id + 1;
    return this.http.post(this.awsomeApiUrl, awsome);
  }

  editAwsome(awsome: Awsome) {
    return this.http.put(this.awsomeApiUrl + '/' + awsome.id, awsome);
  }
}
