import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private dataHandler: DataHandlerService) {
    this.categories = this.dataHandler.getCategories();
  }

  // Метод вызывается автоматически после инициализации компонента
  ngOnInit() {
  }
}
