import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  foods: Food[]

  foodsAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { console.log('FoodService constructed'); }

  public getFoods(): Observable<Food[]> {
    console.log('getFoods');
    return this.http.get<any>(`${environment.apiUrl}/api/food`).pipe(
      map(response => response.map(data => new Food(data))),
      tap(foods => {
        this.foods = foods;
        this.foodsAvailable.next(true);
      })
    );
  }

  getFood(id: String): Observable<Food> {
    console.log(`getFood(${id})`);
    return this.http.get<any>(`${environment.apiUrl}/api/food/${id}`).pipe(
      map(response => new Food(response))
    );
  }

  saveFood(id: String, food: Food) {
    if (this.foods) {
      this.http.put<any>(`${environment.apiUrl}/api/food/${id}`, { name: food.name, date: food.date, energy: food.energy, fat: food.fat, carbohydrate: food.carbohydrate, fibre: food.fibre, protien: food.protien, salt: food.salt }).subscribe((result) => { this.foods.splice(this.foods.findIndex(item => item._id == id),1); this.foods.push(new Food(result)) });
    }
  }

  saveNewFood(food: Food) {
    console.log(`saveNewFood()`);
    console.log(food);
    if (this.foods) {
      this.http.post<any>(`${environment.apiUrl}/api/food`, { username: "admin1", name: food.name, date: food.date, energy: food.energy, fat: food.fat, carbohydrate: food.carbohydrate, fibre: food.fibre, protien: food.protien, salt: food.salt }).subscribe((result) => { this.foods.push(new Food(result)) });
    }
  }

  deleteFood(id: String) {
    console.log(`deleteFood()`);
    if (this.foods) {
      this.http.delete(`${environment.apiUrl}/api/food/${id}`).subscribe();
      this.foods.splice(this.foods.findIndex(item => item._id == id),1);
    }
  }
}
