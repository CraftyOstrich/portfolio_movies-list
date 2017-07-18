import { Component } from "@angular/core";
import { INavItem, NavItems } from "../../../models/navbar";
import { Movie } from "../../../models/movie";
import { Tv } from "../../../models/tv";
import { Person } from "../../../models/person";
import { SearchService } from "../../services/search.service";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { AuthService } from "../../services/auth.service";
import { API_CONFIG } from '../../../app-config';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  navbar: INavItem[] = NavItems;
  searchList: (Movie | Tv | Person)[];
  searchWord: string = '';
  hiddenSearch: boolean = true;
  hiddenNav: boolean = false;
  hiddenMobileNav: boolean = false;
  displaySearchResults: boolean = false;
  private _errorMessage: string;

  constructor(private _searchService: SearchService, private _router: Router,
              public loginService: LoginService, public authService: AuthService) {
  }

  loadSearchList(event) {
    if (event) {
      this._searchService.getSearchList(API_CONFIG.SEARCH_LIST, this.searchWord)
        .subscribe(response => this.searchList = response.results || [],
          error => this._errorMessage = <any>error);
    }
    if (!this.displaySearchResults) {
      this.displaySearchResults = !this.displaySearchResults;
    }
  }

  goToSearchItem(type: string, id: number) {
    this._router.navigate(['/' + type, id]);
    this.displaySearchResults = !this.displaySearchResults;
  }

  goTo(item) {
    if (!item.type) {
      this._router.navigate([item.link])
    } else {
      this._router.navigate([item.link, item.type])
    }
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
