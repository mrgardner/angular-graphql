import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: object;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.displayUser();
  }
  displayUser() {
    const user = gql`
      {
        User {
          display_name
          email
          id
          followers {
            total
          }
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: user,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(map((result: any) => result.data.User))
      .subscribe(data => this.user = data);
  }
}
