import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-administrar-prof',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './administrar-prof.component.html',
  styleUrl: './administrar-prof.component.scss'
})
export class AdministrarProfComponent {
  enabled = [
    {id: '1', nombre: 'Jon'},
    {id: '2', nombre: 'Naiara'},
  ];

  disabled = [];

  drop(event: CdkDragDrop<any>) {
    console.log(event.item.element);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
