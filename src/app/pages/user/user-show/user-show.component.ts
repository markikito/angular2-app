import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mpt-user-show',
  styleUrls: ['./user-show.component.css'],
  templateUrl: './user-show.component.html',
})
export class UserShowComponent implements OnInit {

  userId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

}
