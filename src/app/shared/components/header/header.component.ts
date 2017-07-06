import {Component} from "@angular/core";
import {INavItem, NavItems} from "../../../models/navbar";
import {Movie} from "../../../models/movie";
import {Tv} from "../../../models/tv";
import {Person} from "../../../models/person";
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";

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
  private errorMessage: string;
  private UrlSearchList: string = '/search/multi';
  private displaySearchResults: boolean = false;
  hiddenSearch: boolean = true;
  hiddenNav: boolean = false;
  hiddenMobileNav: boolean = false;

  constructor(public _searchService: SearchService, private router: Router) {}

  loadSearchList(event) {
    if (event) {
        this._searchService.getSearchList(this.UrlSearchList, this.searchWord)
          .subscribe(response => this.searchList = response.results || [],
            error => this.errorMessage = <any>error);
      }
      if (!this.displaySearchResults) {
        this.displaySearchResults = !this.displaySearchResults;
    }
  }

  goToSearchItem(type: string, id: number) {
    console.log(type, id)
    this.router.navigate(['/' + type, id]);
    let href = window.location.href;
    console.log(href)
    this.displaySearchResults = !this.displaySearchResults;
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
