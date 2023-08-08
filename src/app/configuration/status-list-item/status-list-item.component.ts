import {Component, EventEmitter, Input, Output} from '@angular/core';
import {test} from "../configuration/configuration.component";

@Component({
  selector: 'app-status-list-item',
  templateUrl: './status-list-item.component.html',
  styleUrls: ['./status-list-item.component.scss']
})
export class StatusListItemComponent {
  @Input() item: test | null = null;
  @Output() dropEmit = new EventEmitter<test>();
  @Output() dragEmit = new EventEmitter<test>();

  drop() {
    if (this.item)
      this.dropEmit.emit(this.item);
  }

  drag() {
    if (this.item)
      this.dragEmit.emit(this.item);
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
  }
}
