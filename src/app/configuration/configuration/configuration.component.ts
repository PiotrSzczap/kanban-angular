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
}

interface test {
  name: string,
  id: number
}
