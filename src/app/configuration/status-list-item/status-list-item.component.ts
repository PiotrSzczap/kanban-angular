import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-list-item',
  templateUrl: './status-list-item.component.html',
  styleUrls: ['./status-list-item.component.scss']
})
export class StatusListItemComponent {
  @Input() item: string = "";

  drop($event: DragEvent) {

  }

  drag($event: DragEvent) {

  }

  dragOver($event: DragEvent) {

  }
}
