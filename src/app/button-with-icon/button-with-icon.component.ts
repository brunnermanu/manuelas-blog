import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss']
})
export class ButtonWithIconComponent {
  @Input() buttonName: string;
  @Input() iconPath: string;
}
