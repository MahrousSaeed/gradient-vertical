import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {MenuItems} from '../../shared/menu-items/menu-items';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],  animations: [
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
export class SettingsComponent implements OnInit {
  public Func: string;
  public config: any; /**/ 
  public isSidebarChecked: boolean;
  public isVerticalLayoutChecked: boolean;
  public isHeaderChecked: boolean;
  public verticalEffect: string;/**/ 
  public itemBorderStyle: string;/** */
  public dropDownIcon: string;/**done */
  public subItemIcon: string;/**done */
  public activeItemTheme: string;/**done */
  public headerTheme: string;/** done */
  public sidebarImgType: string;/** done */
  public menuTitleTheme: string;/** done */
  public configOpenRightBar: string;
  public navBarTheme: string;/** done */
  public sidebarImg: string;/**done */
  public layoutType: string;/** */
  public verticalLayout: string;/** done*/
  public displayBoxLayout: string;
  public pcodedSidebarPosition: string;/** done*/
  public sidebarFixedHeight: string;/**done */
  public pcodedHeaderPosition: string;/**done */
  public headerFixedMargin: string;/**done */
  // public navBarThemee='themelight1';

  @Output() navBarThemeEvent = new EventEmitter<string>();
  @Output() imageEvent = new EventEmitter<string>();
  @Output() headerPositionEvent = new EventEmitter<string>();
  @Output() headerFixedMarginEvent = new EventEmitter<string>();
  @Output() sidebarPositionEvent = new EventEmitter<string>();
  @Output() sidebarFixedHeightEvent = new EventEmitter<string>();
  @Output() verticalLayoutEvent = new EventEmitter<string>(); 
  @Output() menuTitleThemeEvent = new EventEmitter<string>(); 
  @Output() headerThemeEvent = new EventEmitter<string>(); 
  @Output() navTypeEvent = new EventEmitter<string>(); 
  @Output() activeItemThemeEvent = new EventEmitter<string>(); 
  @Output() sidebarImgTypeEvent = new EventEmitter<string>(); 
  @Output() verticalEffectEvent = new EventEmitter<string>(); 
  @Output() itemBorderStyleEvent = new EventEmitter<string>(); 
  @Output() subItemIconEvent = new EventEmitter<string>(); 
  @Output() dropDownIconEvent = new EventEmitter<string>(); 

  constructor(private globals:MenuItems) {
    this.isSidebarChecked = true;
    this.isHeaderChecked = true;
    this.Func = 'st2';
    this.verticalEffect = 'shrink';
    this.itemBorderStyle = 'none';
    this.dropDownIcon = 'style3';
    this.subItemIcon = 'style7';
    this.activeItemTheme = 'theme10';
    this.headerTheme = 'themelight5';
    this.sidebarImgType = 'img1';
    this.menuTitleTheme = 'theme6';
    this.navBarTheme = 'theme1';
    this.sidebarImg = 'false';
    this.layoutType = 'light';
    this.verticalLayout = 'wide';
    this.pcodedSidebarPosition = 'fixed';
    this.sidebarFixedHeight = 'calc(100vh - 56px)';
    this.pcodedHeaderPosition = 'fixed';
    this.displayBoxLayout = 'd-none';
    this.headerFixedMargin = '56px';
   }

  ngOnInit() {
  }

  toggleRightbar() {
    this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
  }
  setNavBarTheme(theme: string) {
    console.log(theme);
    this.navBarThemeEvent.emit(theme)
    if (theme === 'themelight1') {
      this.navBarTheme = 'themelight1';
      this.navBarThemeEvent.emit('themelight1')
      this.menuTitleTheme = 'theme1';
      this.menuTitleThemeEvent.emit('theme1')
      // this.sidebarImg = 'false';
      this.imageEvent.emit('false')
    } else {
      this.menuTitleTheme = 'theme6';
      this.menuTitleThemeEvent.emit('theme6')
      this.navBarTheme = 'theme1';
      this.navBarThemeEvent.emit('theme1')
      this.sidebarImg = 'false';
      this.imageEvent.emit('false')
    }
  }

  setLayoutType(type: string) {
    this.layoutType = type;
    console.log(this.layoutType);
    this.navBarThemeEvent.emit(this.layoutType)
    if (type === 'dark') {
      this.headerTheme = 'theme1';
      this.headerThemeEvent.emit('theme1')
      // this.sidebarImg = 'false';
      this.imageEvent.emit('false')
      this.navBarTheme = 'theme1';
      this.navBarThemeEvent.emit('theme1')
      this.menuTitleTheme = 'theme6';
      this.menuTitleThemeEvent.emit('theme6')
      document.querySelector('body').classList.add('dark');
    } else if (type === 'light') {
      // this.sidebarImg = 'false';
      this.imageEvent.emit('false')
      this.headerTheme = 'theme5';
      this.headerThemeEvent.emit('theme5')
      this.navBarTheme = 'themelight1';
      this.navBarThemeEvent.emit('themelight1')
      this.menuTitleTheme = 'theme1';
      this.menuTitleThemeEvent.emit('theme1')
      document.querySelector('body').classList.remove('dark');
    } else if (type === 'img') {
      // this.sidebarImg = 'true';

      this.imageEvent.emit('true')

      this.headerTheme = 'theme1';
      this.headerThemeEvent.emit('theme1')
      this.navBarTheme = 'theme1';
      this.navBarThemeEvent.emit('theme1')
      this.menuTitleTheme = 'theme6';
      this.menuTitleThemeEvent.emit('theme6')
      document.querySelector('body').classList.remove('dark');
    }
  }
  setVerticalLayout() {
    this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
    if (this.isVerticalLayoutChecked) {
      this.verticalLayout = 'box';
      this.verticalLayoutEvent.emit('box')
      this.displayBoxLayout = '';
    } else {
      this.verticalLayout = 'wide';
      this.verticalLayoutEvent.emit('wide')
      this.displayBoxLayout = 'd-none';
    }
  }
  setBackgroundPattern(pattern: string) {
    document.querySelector('body').setAttribute('themebg-pattern', pattern);
  }
  setSidebarPosition() {
    this.isSidebarChecked = !this.isSidebarChecked;
    
    this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    this.sidebarPositionEvent.emit(this.isSidebarChecked === true ? 'fixed' : 'absolute')
    
    this.sidebarFixedHeight = this.isHeaderChecked === true ? 'calc(100vh + 56px)' : 'calc(100vh - 56px)';
    this.sidebarFixedHeightEvent.emit(this.isHeaderChecked === true ? 'calc(100vh + 56px)' : 'calc(100vh - 56px)')
  }
  setHeaderPosition() {
    this.isHeaderChecked = !this.isHeaderChecked;
    this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
    this.headerPositionEvent.emit(this.isHeaderChecked === true ? 'fixed' : 'relative')
    this.headerFixedMargin = this.isHeaderChecked === true ? '56px' : '';
    this.headerFixedMarginEvent.emit(this.isHeaderChecked === true ? '56px' : '')

  }
  navTypeFunc = (type)=>{
    this.navTypeEvent.emit(type)
  }
  menuTitleThemeFun(theme){
    this.menuTitleThemeEvent.emit(theme)
  }
  activeItemThemeFunc(theme){
    this.activeItemThemeEvent.emit(theme)
  }
  sidebarImgTypeEventFunc(img){
    this.sidebarImgTypeEvent.emit(img)
  }
  headerThemeEventFunc(theme){
    this.headerThemeEvent.emit(theme)
  }
  verticalEffectFun(theme){
    this.verticalEffectEvent.emit(theme)
  }
  itemBorderStyleFun(theme){
    this.itemBorderStyleEvent.emit(theme)
  }
  dropDownIconFun(theme){
    this.dropDownIconEvent.emit(theme)
  }
  subItemIconFun(theme){
    this.subItemIconEvent.emit(theme)
  }

}
