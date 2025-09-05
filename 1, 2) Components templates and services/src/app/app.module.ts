import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Header/header.component";
import { UserComponent } from "./user/user.component";
import { DatePipe } from '@angular/common';
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [ BrowserModule, DatePipe, SharedModule, TasksModule]
})

export class AppModule {

}