import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [WorkersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
  ],
  exports:[WorkersComponent]
})
export class WorkersModule { }
