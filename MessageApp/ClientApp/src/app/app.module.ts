import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';
import { FeedComponent } from './feed/feed.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginFormComponent,
    SignupFormComponent,
    FeedComponent,
    ChatRoomComponent,
    UserProfileComponent,
    UserListComponent,
    ProfileSettingsComponent,
    ChatFormComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginFormComponent, pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: 'chatroom', component: ChatRoomComponent },
      { path: 'profile', component: ProfileSettingsComponent },
    ])
  ],
  providers: [AuthService, ChatService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
