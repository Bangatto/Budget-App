import { BudgetItem } from '../../shared/model/budget-item-model';
import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {
  isNewItem: boolean;
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
    //if item has a value
    if (this.item){
      //this means an existing object
      //has been passed into this component
      this.isNewItem = false;
    }else{
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
