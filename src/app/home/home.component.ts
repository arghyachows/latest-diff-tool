import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DiffResults, DiffContent } from 'ngx-text-diff/lib/ngx-text-diff.model';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
  contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();
  activeMenu = 1;
  left = ``
  right = ``

  f1 = `<card xmlns="http://businesscard.org">
  <name>Mary Doe</name>
  <title>MD, Spinner Inc.</title>
  <email>mary.Moe@Spinner.com</email>
  <cellphone>(202) 456-1414</cellphone>
  <homephone>(202) 456-1414</homephone>
  <logo url="widget4.gif"/>
</card>`


  f2 = `<card xmlns="http://businesscard.org">
  <name>John Doe</name>
  <title>MD, Widget Inc.</title>
  <email>john.Moe@widget.com</email>
  <phone>(202) 456-1414</phone>
  <cellphone>(202) 456-1414</cellphone>
  <logo url="widget3.gif"/>
</card>`


  f3 = `<card xmlns="http://businesscard.org">
  <name>John Doe</name>
  <title>MD, Widget Inc.</title>
  <email>john.Moe@widget.com</email>
  <cellphone>(202) 456-1414</cellphone>

  <phone>(202) 456-1414</phone>
  <logo url="widget2.gif"/>
</card>`


  f4 = `<card xmlns="http://businesscard.org">
  <name>John Doe</name>
  <title>MD, Widget Inc.</title>
  <email>john.Moe@widget.com</email>
  <cellphone>(202) 456-1414</cellphone>
  <phone>(202) 456-1414</phone>
  <logo url="widget1.gif"/>
</card>`

  constructor() { }

  ngOnInit() {
    this.left = this.f1;
    this.right = this.f1;
  }

  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
  }

  onChangedTextUpdated(lefttextUpdated: string, righttextUpdated: string) {
    this.left = lefttextUpdated;
    this.right = righttextUpdated;
    const newContent: DiffContent = {
      leftContent: this.left,
      rightContent: this.right
    };
    this.contentObservable.next(newContent);
  }

  setFile(file: string) {
    this.left = file;
    console.log('left', this.left);
  }

}
