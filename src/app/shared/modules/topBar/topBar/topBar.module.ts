import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/topBar/topBar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
