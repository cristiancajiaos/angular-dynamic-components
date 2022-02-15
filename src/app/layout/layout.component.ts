import { DialogService } from './../dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { FooComponent } from '../foo/foo.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public dialog: DialogService
  ) { }

  ngOnInit(): void {
    this.dialog.open(FooComponent);
  }

}
