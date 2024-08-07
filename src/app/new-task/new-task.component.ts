import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTask: string = '';
  taskSer: TaskService = inject(TaskService);
  OncreateTask() {
    this.taskSer.OnCreateTask(this.newTask);
  }
}
