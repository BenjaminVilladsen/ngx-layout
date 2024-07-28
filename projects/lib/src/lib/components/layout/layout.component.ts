import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarFooter } from "../../interfaces";
import { TopbarComponent } from "../topbar/topbar.component";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../loading/loading.component";
import { LayoutService } from "../../layout.service";

@Component({
  selector: "ngx-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["../../assets/styles.css"],
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, LoadingComponent, CommonModule],
})
export class LayoutComponent {
  @Input() debug: boolean = false;
  @Input() renderApp: any = true;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() loading?: any = false;
  @Input() showTopbar?: any = true;
  @Input() logo?: string = "/assets/logo.png";
  @Input() sidebarFooter?: SidebarFooter;

  @ContentChild("topbar") topbarTemplate!: TemplateRef<any>;

  constructor(layoutService: LayoutService) {
    if (this.debug) {
      console.log("DEBUG LOG FROM LAYOUT COMPONENT");
      console.log("Debug: ", this.debug);
      console.log("Render App: ", this.renderApp);
      console.log("Title: ", this.title);
      console.log("Subtitle: ", this.subtitle);
      console.log("Loading: ", this.loading);
      console.log("Show Topbar: ", this.showTopbar);
      console.log("Logo: ", this.logo);
      console.log("Sidebar Footer: ", this.sidebarFooter);
    }
  }
}
