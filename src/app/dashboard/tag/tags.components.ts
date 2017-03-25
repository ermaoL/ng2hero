import {Component, OnInit} from '@angular/core';
import {TagService} from '../../services/tag.service';
@Component({
  selector: 'tags',
  templateUrl: 'tags.component.html',
  providers: [TagService]
})
export class TagsComponent implements OnInit {
  constructor(private _tagService: TagService) {
  }

  tags = [];

  ngOnInit() {
    this.getTags();
  }

  getTags(){
    this._tagService.getTagsTree().then(res => {
      this.tags = res.tags;
    }).catch(err => {
      console.log(err);
    })
  }

  addTag(newTag) {
    if(!newTag) {
      alert('必须填标签名');
      return;
    }
    this._tagService.addTag(newTag).then(res=>{
      if(res.success) {
        this.getTags();
      }
    });
    console.log(newTag);
  }

}
