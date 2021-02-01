import { CalendarComponent } from '../dashboard-pages/calendar/calendar.component';
import { MeetingComponent } from '../dashboard-pages/meeting/meeting.component';
import { CreateMeetingComponent } from '../dashboard-pages/meeting/create-meeting/create-meeting.component';
import { DashboardComponent } from '../dashboard-pages/dashboard/dashboard.component';
import { ProfileComponent } from '../dashboard-pages/profile/profile.component';
import { TeamComponent } from '../dashboard-pages/team/team.component';
import { CreateProjectComponent} from '../dashboard-pages/project/create-project/create-project.component';
import { ProjectDetailsComponent } from '../dashboard-pages/project/project-details/project-details.component';
import { TeamProjectComponent } from '../dashboard-pages/project/team-projects/team-project.component';
import { CreateTaskComponent} from '../dashboard-pages/project/create-task/create-task.component';
import { ChatWindowComponent } from '../dashboard-pages/component/chat-window/chat-window.component';
import { ChatLoginComponent } from '../dashboard-pages/component/login/login.component';
import { ChatComponent } from '../dashboard-pages/chat/chat.component';

import { DocumentComponent } from '../dashboard-pages/documents/document.component';



export const DashboardLayoutRoutes = [
    { path: '',      component: DashboardComponent },
    { path: 'calendar',   component: CalendarComponent },
    { path: 'documents',   component: DocumentComponent },
    { path: 'team-members',      component: TeamComponent },
    { path: 'meeting',      component: MeetingComponent },
    { path: 'meeting/login', component: ChatLoginComponent},
    { path: 'meeting/video-conference',      component: ChatWindowComponent },
    { path: 'create-meeting', component: CreateMeetingComponent},
    { path: 'projects', component: TeamProjectComponent },
    { path: 'chats', component: ChatComponent },
    { path: 'create-project',    component: CreateProjectComponent},
    { path: 'user-profile', component: ProfileComponent},
    { path: 'projects/:id', component: ProjectDetailsComponent},
    { path: 'projects/:id/create-task',    component: CreateTaskComponent},

]