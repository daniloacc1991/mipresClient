import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import * as fromRoot from '../../../../reducers';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements AfterViewInit {

  nameuser$: Observable<string> = this.store.select(fromRoot.getAuthUsername);
  public showSearch = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private store: Store<fromRoot.State>,
  ) { }

  ngAfterViewInit() {

  }

  logout() {
    console.log('Evento Logout')
    this.router.navigate(['/auth', 'logout'])
  }

}
