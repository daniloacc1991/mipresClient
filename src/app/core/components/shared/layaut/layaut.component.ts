import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
declare var $: any;

@Component({
  selector: 'app-layaut',
  templateUrl: './layaut.component.html',
  styleUrls: ['./layaut.component.scss']
})
export class LayautComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth: any;
  public defaultSidebar: any;
  public showMobileMenu = false;
  public expandLogo = false;
  
  constructor(
    private store: Store<fromRoot.State>,
    public router: Router,
    ) { }

  options = {
    sidebartype: 'full',
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    // if (this.router.url === '/') {
    //   this.router.navigate(['/dashboard/dashboard1']);
    // }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;
      default:
    }
  }

}
