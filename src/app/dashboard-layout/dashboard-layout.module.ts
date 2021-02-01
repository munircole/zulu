import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule,  } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin

import { NgChatModule } from 'ng-chat';

import { AuthService } from '../services/auth.service';





import { DashboardLayoutRoutes } from './dashboard-layout.routes';

import { CalendarComponent } from '../dashboard-pages/calendar/calendar.component';
import { ChatComponent } from '../dashboard-pages/chat/chat.component';
import { DocumentComponent } from '../dashboard-pages/documents/document.component';

import { MeetingComponent } from '../dashboard-pages/meeting/meeting.component';
import { CreateMeetingComponent } from '../dashboard-pages/meeting/create-meeting/create-meeting.component';
import { DashboardComponent } from '../dashboard-pages/dashboard/dashboard.component';
import { ProfileComponent } from '../dashboard-pages/profile/profile.component';
import { TeamComponent } from '../dashboard-pages/team/team.component';
import { AddTeamComponent } from '../dashboard-pages/team/add-team/add-team.component';

import { CreateProjectComponent} from '../dashboard-pages/project/create-project/create-project.component';
import { CreateTaskComponent} from '../dashboard-pages/project/create-task/create-task.component';

import { ProjectDetailsComponent } from '../dashboard-pages/project/project-details/project-details.component';
import { TeamProjectComponent } from '../dashboard-pages/project/team-projects/team-project.component';

import { ChatWindowComponent } from '../dashboard-pages/component/chat-window/chat-window.component';
import { HeaderComponent } from '../dashboard-pages/component/header/header.component';
import { ChatLoginComponent } from '../dashboard-pages/component/login/login.component';
import { SettingComponent } from '../dashboard-pages/component/setting/setting.component';
import { TextChatWindowComponent } from '../dashboard-pages/component/text-chat-window/text-chat-window.component';
import { UserListComponent } from '../dashboard-pages/component/user-list/user-list.component';
import { UserListHeaderComponent } from '../dashboard-pages/component/user-list-header/user-list-header.component';
import { VideoChatWindowComponent } from '../dashboard-pages/component/video-chat-window/video-chat-window.component';





FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        NgbModalModule,
        NgChatModule,
        FullCalendarModule, // register FullCalendar with you app
        RouterModule.forChild(DashboardLayoutRoutes)
    ],

    declarations:[
        ChatWindowComponent,
        SettingComponent,
        TextChatWindowComponent,
        VideoChatWindowComponent,
        UserListHeaderComponent,
        UserListComponent,
        ChatLoginComponent,
        HeaderComponent,

        TeamComponent,
        DocumentComponent,
        ChatComponent,
        AddTeamComponent,
        DashboardComponent,
        MeetingComponent,
        CreateMeetingComponent,
        CalendarComponent,
        ProfileComponent,
        TeamProjectComponent,
        ProjectDetailsComponent,
        CreateTaskComponent,
        CreateProjectComponent        
    ],

    providers:[
       AuthService


    ]

})
export class DashboardLayoutModule{ }