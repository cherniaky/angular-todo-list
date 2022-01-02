import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'May 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'May 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'May 7th at 12:30pm',
      reminder: false,
    },
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    try {
      // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    } catch (error) {
      
    }
    }

  deleteTask(task: Task) {
    try {
      // this.taskService.deleteTask(task).subscribe();
    } catch (error) {
      
    }
   
    this.tasks = this.tasks.filter((t) => {
          //console.log(t.id , task.id)
          return t.id != task.id;
        })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    try {
     //  this.taskService.updateTask(task).subscribe();
    } catch (error) {
      
    }
   
  }

  addTask(task:Task){
    try {
     // this.taskService.addTask(task).subscribe();
    } catch (error) {
      
    }
     
     this.tasks.push(task);
  }

}
