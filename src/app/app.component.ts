import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent   {   
   title = 'array'
   

   users:FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname:new FormControl(''),
    Email:new FormControl(''),
    skills: new FormArray([]),
    experience: new  FormArray([])
  });
  skills = this.users.get("skills") as FormArray;
  addSkill() {
    const control = new FormControl('', Validators.required);
    this.skills.push(control);
  }
  clear() {
    this.skills.clear();
  }





  experience=this.users.get("experience") as FormArray;
  addexperience() {
    const control = new FormControl('', Validators.required);
    this.experience.push(control);
  }
    
  
  }
 