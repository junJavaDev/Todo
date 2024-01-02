import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {TestData} from "../data/TestData";
import * as Rx from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new Rx.BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new Rx.BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  fillCategories() {
    this.categoriesSubject.next(TestData.categories);
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
