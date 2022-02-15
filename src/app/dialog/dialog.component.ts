import { InsertionDirective } from './insertion.directive';
import { Component, OnInit, Type, ComponentRef, ViewChild, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  onOverlayClicked(evt: MouseEvent) {
    console.log('onOverlayClicked()');
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
}
