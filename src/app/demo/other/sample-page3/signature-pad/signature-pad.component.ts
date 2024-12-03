import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { ApiService } from 'src/app/demo/other/api.service';

@Component({
  selector: 'app-signature-pad',
  standalone: true,
  imports: [],
  templateUrl: './signature-pad.component.html',
  styleUrl: '../../sample-page3/sample-page3.component.css'
})
export class SignaturePadComponent implements OnInit {
  @Input() sinadura: any;
  @Input() sinaduraImg: any;
  @Input() id: any;

  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    console.log(this.id);
  }

  startDrawing(event: Event) {
    // works in device not in browser
  }
  moved(event: Event) {
    // works in device not in browser
  }

  ngAfterViewInit() {
    this.comprobarSinadura();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.api.updateSinadura(this.id, base64Data, 'oroitz').subscribe((data) => {
      console.log(data.status);
    });
    window.alert('Sinatuta!');
    location.reload();
  }

  clearPad() {
    var canvas = this.canvasEl.nativeElement;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.sinadura == false) {
      this.signaturePad.clear();
    }

    this.sinadura = false;
    this.comprobarSinadura();
  }

  comprobarSinadura() {
    if (this.sinadura == true) {
      var canvas = this.canvasEl.nativeElement;
      var ctx = canvas.getContext('2d');

      var image = new Image();
      image.onload = function () {
        ctx.drawImage(image, 10, 10, 300, 150);
      };

      image.src = this.sinaduraImg;
    } else {
      this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
    }
  }
}
