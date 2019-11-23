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
  arr:Array<String>=[];

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

}