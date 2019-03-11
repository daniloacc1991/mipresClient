import { Component, AfterViewInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements AfterViewInit {

  public showSearch = false;

  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngAfterViewInit() {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
