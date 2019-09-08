import { Component, OnInit } from '@angular/core';
import {apiUrl} from '../../../../apiConfig';
import { SearchService } from './../../services/search.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  searchResults = [];
  searchCompleted: boolean = false;
  baseUrl = `${apiUrl}/search?`;
  ngOnInit() {
  }

  buildSearchQuery(
    firstName: any,
    lastName: any,
/*     supportACA: any,
    supportM4A: any,
    incomeLevel: any,
    politicalView: any */
) {
let searchString: String = ``;
// console.log(`first name ${firstName}`);
// console.log(`last name ${lastName}`);
// console.log(`supportACA ${supportACA}`);
// console.log(`supportM4A ${supportM4A}`);
// console.log(`incomeLevel ${incomeLevel}`);
// console.log(`politicalView ${politicalView}`);
// console.log(`voted ${voted}`);
if (firstName !== '') {
  searchString = searchString + `first=${firstName}`;
}
if (lastName !== '') {
  searchString = searchString + `&last=${lastName}`;
}
// if (supportACA !== '') {
//   searchString = searchString + `&supportACA=${supportACA}`;
// }
// if (supportM4A !== '') {
//   searchString = searchString + `&supportM4A=${supportM4A}`;
// }
// if (incomeLevel !== '') {
//   searchString = searchString + `&incomeLevel=${incomeLevel}`;
// }
// if (politicalView !== '') {
//   searchString = searchString + `&politicalView=${politicalView}`;
// }
return  searchString;
}

  // searchDB(
  //           firstName: any,
  //           lastName: any,
  //          /*  supportACA: any,
  //           supportM4A: any,
  //           incomeLevel: any,
  //           politicalView: any,
  //           voted: any */) {
  //             const searchStr: String = this.buildSearchQuery(firstName, lastName/* , supportACA,
  //               supportM4A, incomeLevel, politicalView */);
  //   return this.http
  //     .request(`${apiUrl}/search?firstName=${firstName}&lastName=${lastName}`)
  //     .subscribe((res) => {
  //       this.contacts = res.json();
  //       console.log(`${apiUrl}/search?firstName=${firstName}&lastName=${lastName}`);
  //       console.log(`first name ${firstName}`)
  //       console.log(`last name ${lastName}`)
  //       // console.log(`supportACA ${supportACA}`)
  //       // console.log(`supportM4A ${supportM4A}`)
  //       // console.log(`incomeLevel ${incomeLevel}`)
  //       // console.log(`politicalView ${politicalView}`)
  //       // console.log(`voted ${voted}`)
  //       this.searchCompleted = true;
  //     });
  // }
  async searchDB(form: NgForm, callback: any) {

   return this.searchService.searchContacts(form)
   .subscribe((res: any) => {
     this.searchResults = res.body;
     this.searchCompleted = true;
     console.log(this.searchResults);
   });
  }
}
