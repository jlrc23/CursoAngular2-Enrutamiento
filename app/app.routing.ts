import { Routes, RouterModule } from '@angular/router'

import { InicioComponent } from './inicio.component'
import { NosotrosComponent } from './nosotros.component'
import { ContactenosComponent } from './contactenos.component'

const APP_ROUTES: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'nosotros', component: NosotrosComponent },
  { path:'contactenos', component: ContactenosComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);