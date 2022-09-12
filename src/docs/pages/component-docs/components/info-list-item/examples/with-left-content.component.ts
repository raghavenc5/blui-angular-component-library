import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const LEFT_CONTENT = `<blui-info-list-item>
    <div blui-title>Info List Item</div>
    <div blui-subtitle>with a timestamp as a left component</div>
    <mat-icon [style.color]="Colors.blue[500]" blui-icon>battery_charging_full</mat-icon>
    <div blui-left-content style="display: flex; flex-direction: column; margin-right: 48px">
        <div class="mat-body-2">8:32 <strong>AM</strong></div>
        <div class="mat-body-2" style="margin-top: -4px">11/21/21</div>
    </div>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-left-content-info-list-item-demo',
    template: LEFT_CONTENT,
})
export class WithLeftContentComponent {
    Colors = Colors;
}
