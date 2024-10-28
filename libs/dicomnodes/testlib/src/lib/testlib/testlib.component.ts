import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-testlib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testlib.component.html',
  styleUrl: './testlib.component.scss',
})
export class TestlibComponent {}
