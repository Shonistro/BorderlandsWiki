import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
    private isOpenSubject = new BehaviorSubject<boolean>(false)
    isOpen$ = this.isOpenSubject.asObservable()

    toggleSideBar(){
      this.isOpenSubject.next(!this.isOpenSubject.value);
    }

}
