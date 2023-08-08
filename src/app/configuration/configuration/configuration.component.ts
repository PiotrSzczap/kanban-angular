import {Component} from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  array: test[] = [
    {
      name: "a",
      id: 1
    },
    {
      name: "b",
      id: 2
    },
    {
      name: "c",
      id: 3
    },
    {
      name: "d",
      id: 4
    },
  ];

  draggedItem: test | null = null;

  drop(item: test) {

    if (this.draggedItem) {
      if (this.draggedItem === item)
        return;

      this.array.splice(this.array.indexOf(this.draggedItem), 1);
      const index = this.array.indexOf(item);
      this.array = [
        ...this.array.slice(0, index),
        this.draggedItem,
        ...this.array.slice(index)
      ];
    }
  }

  drag(item: test) {
    this.draggedItem = item;
    console.log(item.name);
  }
}

export interface test {
  name: string,
  id: number
}
