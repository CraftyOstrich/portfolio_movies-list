import {Component} from "@angular/core";
import {INavItem, NavItems} from "../../../models/navbar";

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

  constructor() {}

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
