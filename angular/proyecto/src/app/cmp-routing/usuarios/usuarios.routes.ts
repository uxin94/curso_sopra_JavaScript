import {Routes} from '@angular/router';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard';
import { EditarUsuarioGuard } from './editar-usuarios/editar-usuario.guard';


export const USUARIOS_ROUTES: Routes = [
    
    {path: ':id/info', component: InfoUsuarioComponent, canActivate:[InfoUsuarioGuard]},
    {path: ':id/editar', component: EditarUsuariosComponent, canDeactivate:[EditarUsuarioGuard]},

]

// /usuarios -> muestra los usuarios
// /usuarios/:id/info  -> muestra la info del usuario:id
// /usuarios/:id/editar -> edicion del usuario :id