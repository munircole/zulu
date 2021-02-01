import { ChatAdapter, IChatGroupAdapter, User, Group, Message, ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export  class MyAdapter extends ChatAdapter {
    public userId: string;

    public  listFriends(): Observable<ParticipantResponse[]>{
        return of([]);


    }
    public getMessageHistory(destinataryId: any): Observable<Message[]>{
        return of([]);

    }
    public sendMessage(message: Message): void{

    }
    public onMessageReceived(participant: IChatParticipant, message: Message): void{

    }
    public onFriendsListChanged(participantsResponse: ParticipantResponse[]): void{

    }


    adapter: string;
    title: string;
    isDisabled: boolean;
    isCollapsed: boolean;
    pollFriendsList: boolean;
    pollingInterval: number;
    searchEnabled: boolean; 
    historyEnabled: boolean;
    historyPageSize: number;
    emojisEnabled: boolean; 
    linkfyEnabled: boolean; 
    audioEnabled: boolean;
    audioSource: string;
    persistWindowsState: boolean;
    browserNotificationsEnabled: boolean; 
    browserNotificationIconSource: string;
    maximizeWindowOnNewMessage: boolean;
    hideFriendsList: boolean;
    hideFriendsListOnUnsupportedViewport: boolean;
    fileUploadUrl: string;
    customTheme: string;
    showMessageDate: boolean;
    messageDatePipeFormat: string;
    groupAdapter: IChatGroupAdapter;
    isViewportOnMobileEnabled: boolean;
    messagePlaceholder: string;
    searchPlaceholder: string;
    onParticipantClicked: IChatParticipant;
    onParticipantChatOpened: IChatParticipant;
    onParticipantChatClosed: IChatParticipant;
    onMessagesSeen: Message[];

}
