import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  div1Array: number[] = [1, 2, 3, 4, 5, 6, 7];
  div2Array: number[] = [0, 9, 8];

  draggedElement: number | null = null;
  draggedSource: number[] | null = null;

  drag($event: DragEvent, item: number, array: number[]) {
    this.draggedElement = item;
    this.draggedSource = array;
  }

  drop($event: DragEvent, array: number[]) {
    console.log($event);
    if (this.draggedElement && this.draggedSource) {
      let index = this.draggedSource.indexOf(this.draggedElement);
      this.draggedSource.splice(index, 1);
      array.push(this.draggedElement);
      this.draggedElement = null;
      this.draggedSource = null;
    }
  }

  dragover($event: DragEvent) {
    $event.preventDefault();
  }
}
