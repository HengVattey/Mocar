import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FileInputComponent } from './pages/file-input/file-input.component';
import { FileOutputComponent } from './pages/file-output/file-output.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'fileInput'
},
{
  path:'fileInput',
  component:FileInputComponent
},
{
  path:'fileOutput',
  component:FileOutputComponent
},
{
  path:'report',
  component:ReportComponent
}





];
