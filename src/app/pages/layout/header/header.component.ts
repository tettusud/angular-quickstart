import { Component } from '@angular/core';

interface Menus {
    menuName: string;
    routerUrl: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    menus: Array<Menus> = [
        { 'menuName': 'Home', 'routerUrl': '' },
        { 'menuName': 'Documentation', 'routerUrl': 'docs' }
    ];
}
