import {
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer!: MatSidenav;
  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container!: ViewContainerRef;


  @ContentChild('content', {static: true})
  public templateContent!: TemplateRef<any>;

  public ngOnInit(): void {
    this.container.createEmbeddedView(this.templateContent);
    this.setSideNavControl.emit(this.drawer);
  }

}
