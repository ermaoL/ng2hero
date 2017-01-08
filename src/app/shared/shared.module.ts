import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
@NgModule({
    imports: [CommonModule],
    exports: [AwesomePipe, CommonModule, FormsModule],
    declarations: [AwesomePipe],
    providers: [],
})
export class SharedModule { }
