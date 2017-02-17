import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AwesomePipe } from './awesome.pipe';
@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [AwesomePipe, CommonModule, FormsModule, MaterialModule],
    declarations: [AwesomePipe],
    providers: [],
})
export class SharedModule { }
