import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { MarkedPipe } from './marked.pipe';
@NgModule({
    imports: [CommonModule],
    exports: [AwesomePipe, CommonModule, FormsModule, MarkedPipe],
    declarations: [AwesomePipe, MarkedPipe],
    providers: [],
})
export class SharedModule { }
