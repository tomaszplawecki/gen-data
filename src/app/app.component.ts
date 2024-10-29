import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IbanGeneratorComponent } from './iban-generator/iban-generator.component';
import { PeselGeneratorComponent } from './pesel-generator/pesel-generator.component';

@Component({
  standalone: true,
  imports: [RouterModule, PeselGeneratorComponent, IbanGeneratorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gen-data';
}
