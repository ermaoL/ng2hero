import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkedPipe } from './marked.pipe';
import { CommonAddArticleComponent } from '../components/add-article/common-add-article.component';
@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, MarkedPipe, CommonAddArticleComponent],
    declarations: [MarkedPipe, CommonAddArticleComponent],
    providers: [],
})
export class SharedModule { }
