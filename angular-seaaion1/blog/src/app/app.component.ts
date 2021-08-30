import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog';
  
  hello(){
    return`hello from ${this.title}`
  }

  isHomePage:boolean = true;

  email:string = 'x@gmail.com';

  isActive:boolean = false;

  isHeader:boolean = true;

  headerclass(){
    return{
    header:this.isHeader,
    bold: this.isHeader,
    italic:!this.isHeader
  }
}

  multiStyle(){
    return{
     color:!this.isHeader?'red':'yellow', 
     textDecoration:this.isHeader?'overline':'underline',
     fontSize:this.isHeader?'50px':'100px'
    }
  }
  extraStyle={
   color:this.isHeader?'red':'yellow', 
   textDecoration:!this.isHeader?'overline':'underline',
   margin:this.isHeader?'20px':'50px'
  }
  toggle(){
    return this.isHeader=!this.isHeader
  }

saveevent(){
  alert('data is saved')
}

person:string[]=['sara','mo7','rem']

peopleByCountry:any[]=[
  {
    country:'egypt',
    names:[
      {name:'sara' },
      { name:'hmoh7'},
      { name:'reem'}
    ]
  },

  {
    country:'roma',
    names:[
      {name:'ahmed' },
      { name:'nour'},
      { name:'hend'}
    ]
  }
]



}