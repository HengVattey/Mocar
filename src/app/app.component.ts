import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from "./pages/navigation/navigation.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'document-management';
  checked:boolean=false;

}
