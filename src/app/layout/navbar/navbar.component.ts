import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('notificationBottom', [
      state('an-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('an-animate',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('an-off <=> an-animate', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({
        width: '300px',
        // transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        width: '0',
        // transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('mobileHeaderNavRight', [
      state('nav-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('nav-on',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('nav-off <=> nav-on', [
        animate('400ms ease-in-out')
      ])
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  @Input() HeaderTheme: string;
  @Input() PcodedHeaderPosition: string;
  @Input() VerticalEffect: string;   
  @Input() NavRight: string;   
  @Input() VerticalNavType: string;   
  @Output() VerticalNavTypeEvent = new EventEmitter<string>(); 
  public searchWidthString: string;
  public liveNotification: string;
  public liveNotificationClass: string;
  public profileNotificationClass: string;
  public profileNotification: string;
  public chatSlideInOut: string;
  public innerChatSlideInOut: string;
  public windowWidth: number;
  public chatTopPosition: string;
  public verticalNavType: string;
  public toggleOn: boolean;
  public searchWidth: number;

  constructor() {
    this.liveNotification = 'an-off';
    this.profileNotification = 'an-off';
    this.VerticalNavType = 'expanded';
    this.HeaderTheme = 'themelight5';
    this.VerticalEffect = 'shrink';
    this.innerChatSlideInOut = 'out';
    this.chatSlideInOut = 'out';
    this.searchWidth = 0;
    this.NavRight = 'nav-on';
    this.windowWidth = window.innerWidth;
   }

  ngOnInit() { 
  }
  toggleOpened() {
    console.log('toggle');
    
    if (this.windowWidth < 992) {
      this.toggleOn = this.VerticalNavType === 'offcanvas' ? true : this.toggleOn;
      if (this.NavRight === 'nav-on') {
        this.toggleHeaderNavRight();
      }
    }
    this.VerticalNavTypeEvent.emit(this.VerticalNavType === 'expanded' ? 'offcanvas' : 'expanded')
  }
  toggleHeaderNavRight() {
    this.NavRight = this.NavRight === 'nav-on' ? 'nav-off' : 'nav-on';
    this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
    if (this.NavRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.NavRight === 'nav-off' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }
  toggleChat() {
    this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
    if (this.innerChatSlideInOut === 'in') {
      this.innerChatSlideInOut = 'out';
    }
  }

  searchOff() {
    console.log('close');
    
    const searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList.remove('open');
        clearInterval(searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth - 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }
  searchOn() {
    console.log('open');
    
    document.querySelector('#main-search').classList.add('open');
    const searchInterval = setInterval(() => {
      if (this.searchWidth >= 200) {
        clearInterval(searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth + 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }
  onClickedOutsideSidebar(e: Event) {
     console.log('out');
    
    if ((this.windowWidth < 992 && this.toggleOn && this.VerticalNavType !== 'offcanvas') || this.VerticalEffect === 'overlay') {
      this.toggleOn = true;
      this.VerticalNavType = 'offcanvas';
      this.VerticalNavTypeEvent.emit('offcanvas')
    }
  }
  notificationOutsideClick(ele: string) {
    if (ele === 'live' && this.liveNotification === 'an-animate') {
      this.toggleLiveNotification();
    } else if (ele === 'profile' && this.profileNotification === 'an-animate') {
      this.toggleProfileNotification();
    }
  }
  toggleLiveNotification() {
    this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';

    if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }
  toggleProfileNotification() {
    this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';

    if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }
  toggleInnerChat() {
    this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
  }
}
