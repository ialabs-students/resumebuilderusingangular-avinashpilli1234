import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @Input()

  formData!: ResumeFormData;
  
  @Output()
  editInfoEvent: any;
  constructor() { 
    this.editInfoEvent = new EventEmitter<void>();
    // let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    // this.formData = JSON.parse(data);
  }

  ngOnInit(): void {
  }
  editinfo(): void {

    alert("please wait");

    this.editInfoEvent.emit(true);

  }
}
