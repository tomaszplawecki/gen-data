import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generatePESEL } from './pesel-generator.utils';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-pesel-generator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pesel-generator.component.html',
  styleUrl: './pesel-generator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeselGeneratorComponent {
  private clipboardService = inject(ClipboardService);

  generatedPesel = signal<string>('');

  generatePesel(copy = false): void {
    const generatedPesel = generatePESEL();
    this.generatedPesel.set(generatedPesel);
    if (copy) {
      this.clipboardService.copy(generatedPesel);
    }
  }
}
