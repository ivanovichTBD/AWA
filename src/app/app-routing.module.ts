
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
  },  {
    path: 'inscribirse',
    loadChildren: () => import('./inscribirse/inscribirse.module').then( m => m.InscribirsePageModule)
  },
  {
    path: 'cursos-profesor',
    loadChildren: () => import('./cursos-profesor/cursos-profesor.module').then( m => m.CursosProfesorPageModule)
  },
  {
    path: 'new-cursos-profesor',
    loadChildren: () => import('./new-cursos-profesor/new-cursos-profesor.module').then( m => m.NewCursosProfesorPageModule)
  },
  {
    path: 'adm-estudiante-profesor',
    loadChildren: () => import('./adm-estudiante-profesor/adm-estudiante-profesor.module').then( m => m.AdmEstudianteProfesorPageModule)
  },
  {
    path: 'actividad-profesor',
    loadChildren: () => import('./actividad-profesor/actividad-profesor.module').then( m => m.ActividadProfesorPageModule)
  },
  {
    path: 'profesor-grabar',
    loadChildren: () => import('./profesor-grabar/profesor-grabar.module').then( m => m.ProfesorGrabarPageModule)
  },
  {
    path: 'profesor-texto',
    loadChildren: () => import('./profesor-texto/profesor-texto.module').then( m => m.ProfesorTextoPageModule)
  },
  {
    path: 'profesor-file',
    loadChildren: () => import('./profesor-file/profesor-file.module').then( m => m.ProfesorFilePageModule)
  },
  {
    path: 'profesor-seguimiento',
    loadChildren: () => import('./profesor-seguimiento/profesor-seguimiento.module').then( m => m.ProfesorSeguimientoPageModule)
  }




 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
