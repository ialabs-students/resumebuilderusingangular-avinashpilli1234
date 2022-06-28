import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.css']
})
export class FormFillComponent implements OnInit {

  formData: ResumeFormData;
  showResume: boolean = false;
  constructor() { 
    this.formData = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      desc: "",
      decl: "",
      web: "",
      university11: "",
      yearofpassing11:"",
      percentage11: "",
      university21: "",
      yearofpassing21:"",
      percentage21: "",
      university31: "",
      yearofpassing31:"",
      percentage31: "",
      university41: "",
      yearofpassing41:"",
      percentage41: "",
      designation1: "",
      organization1: "",
      doj1: "",
      dor1: "",
      designation2: "",
      organization2: "",
      doj2: "",
      dor2: "",
      designation3: "",
      organization3: "",
      doj3: "",
      dor3: "",
      designation4: "",
      organization4: "",
      doj4: "",
      dor4: "",

    }
  }

  ngOnInit(): void {
  }

  saveFormData(){
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }
  editinfo(editInfo: string) {

    //alert(editInfo)

    this.showResume = false; //form secton in ts

  }

}
