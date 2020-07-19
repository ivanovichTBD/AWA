
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'Registro',
    loadChildren: () => import('./Registro/Registro.module').then( m => m.RegistroPageModule)

      },
  
  {
    path: 'ver-actividades',
    loadChildren: () => import('./ver-actividades/ver-actividades.module').then( m => m.VerActividadesPageModule)
  },
  {
    path: 'hacer-actividades',
    loadChildren: () => import('./hacer-actividades/hacer-actividades.module').then( m => m.HacerActividadesPageModule)
  },
  {
    path: 'escribir-texto',
    loadChildren: () => import('./escribir-texto/escribir-texto.module').then( m => m.EscribirTextoPageModule)
  },
  {
    path: 'grabar-audio',
    loadChildren: () => import('./grabar-audio/grabar-audio.module').then( m => m.GrabarAudioPageModule)
  },
  {
    path: 'seguimiento-estudiante',
    loadChildren: () => import('./seguimiento-estudiante/seguimiento-estudiante.module').then( m => m.SeguimientoEstudiantePageModule)
  }



 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
