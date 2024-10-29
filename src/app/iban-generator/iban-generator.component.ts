import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { generatePolishIban } from './iban-generator.utils';

@Component({
  selector: 'app-iban-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iban-generator.component.html',
  styleUrl: './iban-generator.component.scss',
})
export class IbanGeneratorComponent {
  private clipboardService = inject(ClipboardService);

  generatedIban = signal<string>('');

  generateIban(copy = false): void {
    const generatedIban = generatePolishIban();
    this.generatedIban.set(generatedIban);
    if (copy) {
      this.clipboardService.copy(generatedIban);
    }
  }
}
