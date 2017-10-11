import { Component } from '@angular/core';
import { INavItem, NavItems } from '../../../models/navbar';
import { Movie } from '../../../models/movie';
import { Tv } from '../../../models/tv';
import { Person } from '../../../models/person';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { API_CONFIG } from '../../../app-config';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  /**
   * Array of header menu navigation links
   * @type {INavItem[]}
   */
  protected navbar: INavItem[] = NavItems;
  /**
   * Result array of search request
   * @type {(Movie | Tv | Person)[]}
   */
  protected searchList: (Movie | Tv | Person)[];
  /**
   * Search keyword
   * @type {string}
   */
  protected searchWord = '';
  /**
   * Visibility of global search field
   * @type {boolean}
   */
  protected hiddenSearch = true;
  /**
   * Visibility of navigation
   * @type {boolean}
   */
  protected hiddenNav = false;
  /**
   * Visibility navigation for mobile version
   * @type {boolean}
   */
  protected hiddenMobileNav = false;
  /**
   * Visibility results of global search
   * @type {boolean}
   */
  protected displaySearchResults = false;
  /**
   * Error message
   * @type {string}
   */
  private _errorMessage: string;

  constructor(private _searchService: SearchService,
              private _router: Router,
              public loginService: LoginService,
              public authService: AuthService) {
  }

  /**
   * Load search list, when user type keyword
   * @param event
   */
  protected loadSearchList(event) {
    if (event) {
      this._searchService.getSearchList(API_CONFIG.SEARCH_LIST, this.searchWord)
        .subscribe(response => this.searchList = response.results || [],
          error => this._errorMessage = <any>error);
    }
    if (!this.displaySearchResults) {
      this.displaySearchResults = !this.displaySearchResults;
    }
  }

  /**
   * Navigate to search item
   * @param type (type of search: movie, tv or person)
   * @param id
   */
  protected goToSearchItem(type: string, id: number) {
    this._router.navigate(['/' + type, id]);
    this.displaySearchResults = !this.displaySearchResults;
  }

  /**
   * Navigate to page
   * @param item
   */
  protected goTo(item) {
    if (!item.type) {
      this._router.navigate([item.link]);
    } else {
      this._router.navigate([item.link, item.type]);
    }
  }

  /**
   * Open navigation menu  (mobile version)
   */
  protected dropDownMobileList() {
    this.hiddenMobileNav = !this.hiddenMobileNav;
  }

  /**
   * Show global search list
   */
  showSearchField() {
    this.hiddenSearch = false;
    this.hiddenNav = true;
  }
  /**
   * Show global search list
   */
  closeSearchField() {
    this.hiddenSearch = true;
    this.hiddenNav = false;
  }
}
