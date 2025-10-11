import { Routes } from '@angular/router';
import { FileInputComponent } from './pages/file-input/file-input.component';
import { FileOutputComponent } from './pages/file-output/file-output.component';
import { ReportComponent } from './pages/report/report.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo: 'login'
},
{
path:'login',
component:LoginComponent

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
