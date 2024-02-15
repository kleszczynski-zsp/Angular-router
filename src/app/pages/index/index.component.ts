import { Component } from '@angular/core';
import { CompoModule } from '../../compo/compo.module';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CompoModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
