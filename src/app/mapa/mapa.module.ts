import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MapaComponent } from './mapa.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Mapa', url: '/mapa' },
        { title: 'Starter Page' }
      ]
    },
    component: MapaComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [MapaComponent]
})
export class MapaModule {}