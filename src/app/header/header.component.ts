import {Component} from "@angular/core";
import {INavItem, NavItems} from "./navbar";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  navbar: INavItem[] = NavItems;
  hiddenSearch: boolean = true;
  hiddenNav: boolean = false;
  hiddenMobileNav: boolean = false;

  constructor() {

  }


  dropDownList(navItem: INavItem) {
    navItem.collapsed = !navItem.collapsed;
  }

  dropDownMobileList() {
    this.hiddenMobileNav = !this.hiddenMobileNav;
  }

  showSearchField() {
    this.hiddenSearch = false;
    this.hiddenNav = true;
  }

  closeSearchField() {
    this.hiddenSearch = true;
    this.hiddenNav = false;
  }

}
