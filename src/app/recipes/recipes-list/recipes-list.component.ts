import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe', 'Test Desc','https://cdn.pickuplimes.com/cache/54/d3/54d3d1f1dd4de3486e077335d89a2948.jpg')
  ];
  constructor() { } 

  ngOnInit(): void {
  }

}
