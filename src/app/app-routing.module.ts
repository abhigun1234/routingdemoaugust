import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesdataComponent} from './salesdata/salesdata.component'
import {VenderComponent} from './vender/vender.component'
import {PagenotfoundComponent}  from './pagenotfound/pagenotfound.component'
const routes: Routes = [{path:'',
component:SalesdataComponent},{path:'vendor',
component:VenderComponent

},{path:'salesdata',
component:SalesdataComponent}
,{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[SalesdataComponent,VenderComponent]