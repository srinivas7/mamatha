import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./shell-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { FederatedComponent } from "./components/federated/federated.component";
import { MdmfSharedModule } from "projects/mdmf-shared/src/lib/modules/mdmf-shared.module";
import { PostService } from "./post.service";

@NgModule({
  declarations: [HomeComponent, FederatedComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MdmfSharedModule,
  ],
  providers: [PostService]
})
export class ShellModule {}
