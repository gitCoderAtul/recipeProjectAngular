import { Component, OnInit, ViewChild,ElementRef,EventEmitter, Output} from '@angular/core';
import { Indgredient } from 'src/app/shared/ingredient.module';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
   
  @ViewChild('nameInput') nameInputRef!:ElementRef;
  @ViewChild('amountInput') amountInputRef!:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Indgredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){  
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Indgredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient); 

  }

}
