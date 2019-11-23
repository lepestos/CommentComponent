import { Component } from '@angular/core';
import {CommentNode} from './comments/comment-tree.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  comments:Array<CommentNode> = [];
  text:string="";
  a:Array<String>=[];
  /*i:number = 0;
  j:number = 0;
  k:number = 0;*/
  constructor(){    
    this.comments =  [new CommentNode("The First Comment"),
                      new CommentNode("The Second Comment"),
                      new CommentNode("The Third Comment")
    ]
  }
  addMainComment(text:string){
    if(text){
      this.comments.push(new CommentNode(text));
      this.text = "";
    }
  }
 /* viewTheBranch(node: CommentNode){
    if(node.anwsers[0]){ 
      this.j = 0;
      while(node.answers[this.j]){
        this.a.push(node.answers[this.j].text);
        this.k = this.j;
        this.viewTheBranch(node.answers[this.j]);
        this.j = this.k;
        this.a.push(this.j.toString());
        this.j = this.j + 1;
      }
    }
    
  }*/
  
  

  /*viewText(){
    this.a=[];
    this.i=0;
    while(this.i<this.comments.length){
      this.a.push(this.comments[this.i].text);
      this.i = this.i+1;
    }
    this.viewTheBranch(this.comments[0]);
    return this.a;
  }*/

}
