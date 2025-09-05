import { Component , signal, computed, Input, input, Output, EventEmitter, output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  ////////////////////////// DUMMY //////////////////////////
  // selectedUser = signal(DUMMY_USERS[0]);

  // // get imagePath () {
  // //   return 'assets/users/'+ this.selectedUser().avatar;
  // // }

  // // With signals
  // imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);

  // OnSelectUser () {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // Input Using Signals
  // avatar = input<string>("");
  // name = input<string>("");

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  ////////////////////////// Actual getting Input //////////////////////////
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>(); // Modern Approach

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  OnSelectUser () {
    this.select.emit(this.user.id);
  }
}
