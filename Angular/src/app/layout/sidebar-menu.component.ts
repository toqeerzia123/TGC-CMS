import {Component, Injector, OnInit} from '@angular/core';
import {AppComponentBase} from '@shared/app-component-base';
import {
    Router,
    RouterEvent,
    NavigationEnd,
    PRIMARY_OUTLET
} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {MenuItem} from '@shared/layout/menu-item';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent extends AppComponentBase implements OnInit {
    menuItems: MenuItem[];
    menuItemsMap: { [key: number]: MenuItem } = {};
    activatedMenuItems: MenuItem[] = [];
    routerEvents: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
    homeRoute = '/app/about';

    constructor(injector: Injector, private router: Router) {
        super(injector);
        this.router.events.subscribe(this.routerEvents);
    }

    ngOnInit(): void {
        this.menuItems = this.getMenuItems();
        this.patchMenuItems(this.menuItems);
        this.routerEvents
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                const currentUrl = event.url !== '/' ? event.url : this.homeRoute;
                const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root
                    .children[PRIMARY_OUTLET];
                if (primaryUrlSegmentGroup) {
                    this.activateMenuItems('/' + primaryUrlSegmentGroup.toString());
                }
            });
    }

    getMenuItems(): MenuItem[] {
        return [

            new MenuItem(this.l('Website Content'), '', 'fas fa-theater-masks', '', [
                new MenuItem(
                    this.l('Tournaments'),
                    '/app/tournaments',
                    'fas fa-theater-masks',
                    'Pages.Tournaments'
                ),
                new MenuItem(
                    this.l('Games'),
                    '/app/games',
                    'fas fa-theater-masks',
                    'Pages.Games'
                ),
                new MenuItem(
                    this.l('Announcements'),
                    '/app/announcements',
                    'fas fa-theater-masks',
                    'Pages.Announcements'
                ),
                new MenuItem(
                    this.l('Blogs'),
                    '/app/blogs',
                    'fas fa-theater-masks',
                    ''
                ),
                new MenuItem(
                    this.l('Watch Us'),
                    '/app/watch-us',
                    'fas fa-theater-masks',
                    'Pages.Watchus'
                ),
                new MenuItem(
                    this.l('Articles'),
                    '/app/articles',
                    'fas fa-theater-masks',
                    'Pages.Articles'
                ),
                new MenuItem(
                    this.l('FAQs'),
                    '/app/faqs',
                    'fas fa-theater-masks',
                    'Pages.FAQs'
                ),
                new MenuItem(
                    this.l('Main Slider'),
                    '/app/slider',
                    'fas fa-theater-masks',
                    'Pages.Slider'
                ),
                new MenuItem(
                    this.l('Promotions'),
                    '/app/promotions',
                    'fas fa-theater-masks',
                    'Pages.Promotions'
                ),
                new MenuItem(
                    this.l('Invite Friend'),
                    '/app/invite-friend',
                    'fas fa-theater-masks',
                    'Pages.InviteFriend'
                ),
            ]),

            new MenuItem(this.l('Portal Management'), '', 'fas fa-theater-masks', '', [
                new MenuItem(
                    this.l('Users'),
                    '/app/users',
                    'fas fa-users',
                    'Pages.Users'
                ),
                new MenuItem(
                    this.l('Tournaments'),
                    '/app/tournaments',
                    'fas fa-theater-masks',
                    'Pages.Tournaments'
                ),
                new MenuItem(
                    this.l('Games'),
                    '/app/games',
                    'fas fa-theater-masks',
                    'Pages.Games'
                )
            ]),

            new MenuItem(this.l('Settings'), '', 'fas fa-theater-masks', '', [
            ]),
            // new MenuItem(this.l('About'), '/app/about', 'fas fa-info-circle'),
            // new MenuItem(this.l('HomePage'), '/app/home', 'fas fa-home'),
            // new MenuItem(
            //     this.l('Tenants'),
            //     '/app/tenants',
            //     'fas fa-building',
            //     'Pages.Tenants'
            // ),
           
            // new MenuItem(
            //     this.l('Roles'),
            //     '/app/roles',
            //     'fas fa-theater-masks',
            //     'Pages.Roles'
            // ),
           
            // new MenuItem(
            //     this.l('Navigations'),
            //     '/app/navigations',
            //     'fas fa-theater-masks',
            //     'Pages.Navigations'
            // ),
            // new MenuItem(
            //     this.l('Support Links'),
            //     '/app/support-links',
            //     'fas fa-theater-masks',
            //     'Pages.Support'
            // ),
            // new MenuItem(
            //     this.l('Social Links'),
            //     '/app/social-links',
            //     'fas fa-theater-masks',
            //     'Pages.Social'
            // ),
            // new MenuItem(this.l('Site Banners'), '', 'fas fa-theater-masks', '', [
            //     new MenuItem(
            //         'Favourite Games',
            //         '/app/favourite-games',
            //         'far fa-circle',
            //         'Pages.FavouriteGames'
            //     ),
            //     new MenuItem(
            //         'How This works',
            //         '/app/how-this-works',
            //         'far fa-circle',
            //         'Pages.Howthisworks'
            //     ),
            //     new MenuItem(
            //         'Advertisement 1',
            //         '/app/adv-1',
            //         'far fa-circle',
            //         'Pages.Ad1'
            //     ),
            //     new MenuItem(
            //         'Advertisement 2',
            //         '/app/adv-2',
            //         'far fa-circle',
            //         'Pages.Ad2'
            //     ),
            // ]),
            // new MenuItem(this.l('Corporate Pages'), '', 'fas fa-theater-masks', '', [
            //     new MenuItem(
            //         'Game Dev',
            //         '/app/game-dev',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Metaverse',
            //         '/app/metaverse',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Contact Page & Support',
            //         '/app/contact-page',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Social Media Link Pages',
            //         '/app/social-media-page',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Video Stream',
            //         '/app/video-stream',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Tokenomics',
            //         '/app/tokenomics',
            //         'far fa-circle',
            //         ''
            //     ),
            //     new MenuItem(
            //         'Legal',
            //         '/app/legal',
            //         'far fa-circle',
            //         ''
            //     ),
            // ])
        ];
    }

    patchMenuItems(items: MenuItem[], parentId?: number): void {
        items.forEach((item: MenuItem, index: number) => {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
            if (parentId) {
                item.parentId = parentId;
            }
            if (parentId || item.children) {
                this.menuItemsMap[item.id] = item;
            }
            if (item.children) {
                this.patchMenuItems(item.children, item.id);
            }
        });
    }

    activateMenuItems(url: string): void {
        this.deactivateMenuItems(this.menuItems);
        this.activatedMenuItems = [];
        const foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
        foundedItems.forEach((item) => {
            this.activateMenuItem(item);
        });
    }

    deactivateMenuItems(items: MenuItem[]): void {
        items.forEach((item: MenuItem) => {
            item.isActive = false;
            item.isCollapsed = true;
            if (item.children) {
                this.deactivateMenuItems(item.children);
            }
        });
    }

    findMenuItemsByUrl(
        url: string,
        items: MenuItem[],
        foundedItems: MenuItem[] = []
    ): MenuItem[] {
        items.forEach((item: MenuItem) => {
            if (item.route === url) {
                foundedItems.push(item);
            } else if (item.children) {
                this.findMenuItemsByUrl(url, item.children, foundedItems);
            }
        });
        return foundedItems;
    }

    activateMenuItem(item: MenuItem): void {
        item.isActive = true;
        if (item.children) {
            item.isCollapsed = false;
        }
        this.activatedMenuItems.push(item);
        if (item.parentId) {
            this.activateMenuItem(this.menuItemsMap[item.parentId]);
        }
    }

    isMenuItemVisible(item: MenuItem): boolean {
        if (!item.permissionName) {
            return true;
        }
        return this.permission.isGranted(item.permissionName);
    }
}
