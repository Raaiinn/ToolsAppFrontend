import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  people: Person[]=[];
  users: any[]=[];


  page=0;
  size = 1;
  order='id';
  totalPages: Number[]=[];
  asc = true;
  isFirst = false;
  isLast = false;
  isLastUserByPerson = false
  index = 0;

  constructor(private userService : UserService){}

  loadUsers(): void{
    this.userService.searchAllUsers(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.totalPages = new Array(data['totalPages']);
        this.people = data.content;
        this.users = data.content[this.index].users;
        this.isFirst = data.first;
        this.isLast = data.last;
        console.log(data);
      });
  }

  rewind():void{
    if(!this.isFirst){
      this.page--;
      this.loadUsers();
    }

  }
  forward():void{
    if(!this.isLast){
      this.page++;
      this.loadUsers();
    }
  }

  setPage(page : number): void{
    this.page = page;
    this.loadUsers();
  }
  ngOnInit(): void {
      this.loadUsers();
  }

}
