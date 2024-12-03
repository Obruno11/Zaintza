import { Component, OnInit, Input } from '@angular/core';
import { SignaturePadComponent } from '../signature-pad/signature-pad.component';


@Component({
  selector: 'app-prf-accordion-body',
  standalone: true,
  imports: [SignaturePadComponent],
  templateUrl: './prf-accordion-body.component.html',
  styleUrl: '../../sample-page3/sample-page3.component.css'
})
export class PrfAccordionBodyComponent implements OnInit {
  @Input() id: any;
  @Input() ordezkatua: any;
  @Input() taldea: any;
  @Input() gela: any;
  @Input() oharra: any;
  @Input() sinadura: any;
  @Input() sinaduraImg: any;

  ngOnInit(): void {}
}
