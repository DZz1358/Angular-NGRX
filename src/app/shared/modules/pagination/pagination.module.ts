import { RouterModule } from '@angular/router';
import { UtilsService } from './../../services/utils.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent
  ],
  providers: [UtilsService]
})
export class PaginationModule { }
