import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });

    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

}
