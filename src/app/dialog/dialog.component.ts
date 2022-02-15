import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  childComponentType: Type<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  onOverlayClicked(evt: MouseEvent) {
    console.log('onOverlayClicked()');
  }

  onDialogClicked(evt: MouseEvent) {
    console.log('onDialogClicked()');
  }
}
