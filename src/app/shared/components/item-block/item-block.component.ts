import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-block',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(id) {
    this.router.navigate(['movie', id]);
  }
}