import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../theme.service";

@Component({
  selector: "ngx-layout-topbar",
  templateUrl: "./topbar.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TopbarComponent {
[x: string]: any;

  @Input({required:true}) topbarHeight!: number;

  constructor(public themeService: ThemeService) {}
}
