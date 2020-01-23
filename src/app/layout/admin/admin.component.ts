import { Component, OnInit ,Input } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {MenuItems} from '../../shared/menu-items/menu-items';
import{Router} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
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
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class AdminComponent implements OnInit {

  sidebarMenu = []

  public navType: string;
  public themeLayout: string;
  public verticalPlacement: string;
  public verticalLayout: string;
  public pcodedDeviceType: string;
  public verticalNavType: string;
  public verticalEffect: string;
  public vnavigationView: string;
  public freamType: string;
  public sidebarImg: string;
  public sidebarImgType: string;
  public layoutType: string;

  public headerTheme: string;
  public pcodedHeaderPosition: string;

  public liveNotification: string;
  public liveNotificationClass: string;

  public profileNotification: string;
  public profileNotificationClass: string;

  public chatSlideInOut: string;
  public innerChatSlideInOut: string;

  public searchWidth: number;
  public searchWidthString: string;

  public navRight: string;
  public windowWidth: number;
  public chatTopPosition: string;

  public toggleOn: boolean;
  public navBarTheme: string;
  public activeItemTheme: string;
  public pcodedSidebarPosition: string;

  public menuTitleTheme: string;
  public dropDownIcon: string;
  public subItemIcon: string;

  public configOpenRightBar: string;
  public displayBoxLayout: string;
  public headerFixedMargin: string;
  public sidebarFixedHeight: string;
  public itemBorderStyle: string;
  public subItemBorder: boolean;
  public itemBorder: boolean;

  public config: any;
  
  constructor(public menuItems: MenuItems,public router:Router) {
    this.navType = 'st2';
    this.themeLayout = 'vertical';
    this.verticalPlacement = 'left';
    this.verticalLayout = 'wide';
    this.pcodedDeviceType = 'desktop';
    this.verticalNavType = 'expanded';
    this.verticalEffect = 'shrink';
    this.vnavigationView = 'view1';
    this.freamType = 'theme1';
    this.sidebarImg = 'false';
    this.sidebarImgType = 'img1';
    this.layoutType = 'light';

    this.headerTheme = 'themelight5';
    this.pcodedHeaderPosition = 'fixed';

    this.liveNotification = 'an-off';
    this.profileNotification = 'an-off';

    this.chatSlideInOut = 'out';
    this.innerChatSlideInOut = 'out';

    // this.searchWidth = 0;

    this.navRight = 'nav-on';

    this.windowWidth = window.innerWidth;
    this.setHeaderAttributes(this.windowWidth);

    this.toggleOn = true;
    this.navBarTheme = 'theme1';
    this.activeItemTheme = 'theme10';
    this.pcodedSidebarPosition = 'fixed';
    this.menuTitleTheme = 'theme6';
    this.dropDownIcon = 'style3';
    this.subItemIcon = 'style7';

    this.displayBoxLayout = 'd-none';
    this.headerFixedMargin = '56px';
    this.sidebarFixedHeight = 'calc(100vh - 56px)';
    this.itemBorderStyle = 'none';
    this.subItemBorder = true;
    this.itemBorder = true;

    this.setMenuAttributes(this.windowWidth);
    this.setHeaderAttributes(this.windowWidth);
    this.menuItems.navBarTheme.subscribe(res=>{
      this.navBarTheme = res.toString()
    })
  }

  ngOnInit() {
    console.log('router',this.router.config[0].children);
    this.sidebarMenu = this.router.config[0].children.filter(res => res.path != '')
    console.log(this.sidebarMenu);

    this.setBackgroundPattern('pattern1');
    /*document.querySelector('body').classList.remove('dark');*/
  }


  receiveNavBarThemeEvent($event) {
    this.navBarTheme = $event
  }
  receiveImageEvent($event){
    this.sidebarImg = $event
  }
  receiveHeaderPositionEvent($event){
    this.pcodedHeaderPosition = $event
  }
  receiveHeaderFixedMarginEvent($event){
    this.headerFixedMargin = $event
  }
  receiveSidebarPositionEvent($event){
    this.pcodedSidebarPosition = $event
  }
  receiveSidebarFixedHeightEvent($event){
    this.sidebarFixedHeight = $event
  }
  receiveVerticalLayoutEvent($event){
    this.verticalLayout = $event
  }
  receiveMenuTitleThemeEvent($event){
    this.menuTitleTheme = $event
  }
  receiveHeaderThemeEvent($event){
    this.headerTheme = $event
  }

  receiveNavTypeEvent($event){
    this.navType = $event
  }
  receiveActiveItemTheme($event){
    this.activeItemTheme = $event
  }
  receiveSidebarImgType($event){
    this.sidebarImgType = $event
  }
  receiveItemBorderStyle($event){
    this.itemBorderStyle = $event
  }
  receiveVerticalEffect($event){
    this.verticalEffect = $event
  }
  receiveSubItemIcon($event){
    this.subItemIcon = $event
  }
  receiveDropDownIcon($event){
    this.dropDownIcon = $event
  }


  recieveVerticalNavType($event){
    this.verticalNavType = $event
  }
  



  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.setHeaderAttributes(this.windowWidth);

    let reSizeFlag = true;
    if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.pcodedDeviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }
    /* for check device */
    if (reSizeFlag) {
      this.setMenuAttributes(this.windowWidth);
    }
  }

  setHeaderAttributes(windowWidth) {
    if (windowWidth < 992) {
      this.navRight = 'nav-off';
    } else {
      this.navRight = 'nav-on';
    }
  }

  setMenuAttributes(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.pcodedDeviceType = 'tablet';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else if (windowWidth < 768) {
      this.pcodedDeviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.pcodedDeviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  // toggleHeaderNavRight() {
  //   this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
  //   this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
  //   if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
  //     this.toggleInnerChat();
  //   }
  //   if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
  //     this.toggleChat();
  //   }
  // }

  // toggleLiveNotification() {
  //   this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
  //   this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';

  //   if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
  //     this.toggleInnerChat();
  //   }
  //   if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
  //     this.toggleChat();
  //   }
  // }

  // toggleProfileNotification() {
  //   this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
  //   this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';

  //   if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
  //     this.toggleInnerChat();
  //   }
  //   if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
  //     this.toggleChat();
  //   }
  // }

  // notificationOutsideClick(ele: string) {
  //   if (ele === 'live' && this.liveNotification === 'an-animate') {
  //     this.toggleLiveNotification();
  //   } else if (ele === 'profile' && this.profileNotification === 'an-animate') {
  //     this.toggleProfileNotification();
  //   }
  // }

  // toggleChat() {
  //   this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
  //   if (this.innerChatSlideInOut === 'in') {
  //     this.innerChatSlideInOut = 'out';
  //   }
  // }

  // toggleInnerChat() {
  //   this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
  // }

  // searchOn() {
  //   document.querySelector('#main-search').classList.add('open');
  //   const searchInterval = setInterval(() => {
  //     if (this.searchWidth >= 200) {
  //       clearInterval(searchInterval);
  //       return false;
  //     }
  //     this.searchWidth = this.searchWidth + 15;
  //     this.searchWidthString = this.searchWidth + 'px';
  //   }, 35);
  // }

  // searchOff() {
  //   const searchInterval = setInterval(() => {
  //     if (this.searchWidth <= 0) {
  //       document.querySelector('#main-search').classList.remove('open');
  //       clearInterval(searchInterval);
  //       return false;
  //     }
  //     this.searchWidth = this.searchWidth - 15;
  //     this.searchWidthString = this.searchWidth + 'px';
  //   }, 35);
  // }

  // toggleOpened() {
  //   if (this.windowWidth < 992) {
  //     this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
  //     if (this.navRight === 'nav-on') {
  //       this.toggleHeaderNavRight();
  //     }
  //   }
  //   this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
  // }

  onClickedOutsideSidebar(e: Event) {
    // console.log(e);
    
    if ((this.windowWidth < 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
    }
  }

  toggleRightbar() {
    this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
  }

 
  setBackgroundPattern(pattern: string) {
    document.querySelector('body').setAttribute('themebg-pattern', pattern);
  }



}
