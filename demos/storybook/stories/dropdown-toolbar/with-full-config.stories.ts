import { text, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const withFullConfig = (): any => ({
    template: `
       <pxb-dropdown-toolbar [title]="title" [subtitle]="state.selected || subtitle">
            <button mat-icon-button pxb-nav-icon (click)="clickPXBIcon()" aria-label="menu icon">
            <mat-icon *ngIf="navIcon === 'menu'">menu</mat-icon>
            <mat-icon *ngIf="navIcon === 'arrow_back'">arrow_back</mat-icon>
            </button>
        <ng-container pxb-toolbar-menu>
            <button mat-menu-item (click)="updateSubtitle('Test Item 1', state)">Test Item 1</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 2', state)">Test Item 2</button>
            <button mat-menu-item (click)="updateSubtitle('Test Item 3', state)">Test Item 3</button>
        </ng-container>
        <pxb-spacer></pxb-spacer>
        <div>
            <button mat-icon-button style="margin: 0 4px" *ngIf="count > 0" (click)="clickRightContentIcon()" aria-label="home icon"><mat-icon>home</mat-icon></button>
            <button mat-icon-button style="margin: 0 4px" *ngIf="count > 1" (click)="clickRightContentIcon()" aria-label="work icon"><mat-icon>work</mat-icon></button>
            <button mat-icon-button
                *ngIf="count > 2" 
                (click)="clickRightContentIcon()"
                [style.marginRight.px]="direction() === 'rtl' ? 4 : -8"
                [style.marginLeft.px]="direction() === 'rtl' ? -8 : 4"
                aria-label="settings icon">
                <mat-icon>settings</mat-icon>
            </button>
        </div>
       </pxb-dropdown-toolbar>
    `,
    props: {
        direction: getDirection,
        navIcon: select('pxb-nav-icon', ['menu', 'arrow_back'], 'menu'),
        title: text('title', 'Title'),
        subtitle: text('subtitle', 'Subtitle'),
        count: number('right content icon count', 3, { range: true, min: 0, max: 3, step: 1 }),
        updateSubtitle: (str: string, state): void => {
            state.selected = str;
        },
        state: {
            selected: undefined,
        },
        clickPXBIcon: action('pxb nav icon clicked'),
        clickRightContentIcon: action('icon clicked'),
    },
});
