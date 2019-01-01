import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private basePath = '/shares';
  public items: any;
  public item: any;
  constructor(private db: AngularFireDatabase) { }

  addShare(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }
}
