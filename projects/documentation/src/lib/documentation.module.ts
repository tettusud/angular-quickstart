import { NgModule } from '@angular/core';
import { DocumentationComponent } from './documentation.component';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: 'docs', component: DocumentationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DocumentationComponent],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
