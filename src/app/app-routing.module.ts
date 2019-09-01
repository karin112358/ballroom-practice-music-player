import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticePlayerComponent } from './practice-player/practice-player.component';
import { SettingsComponent } from './settings/settings.component';
import { TrainingPlayerComponent } from './training-player/training-player.component';

const routes: Routes = [
  { path: 'training', component: TrainingPlayerComponent },
  { path: 'practice', component: PracticePlayerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/training', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
