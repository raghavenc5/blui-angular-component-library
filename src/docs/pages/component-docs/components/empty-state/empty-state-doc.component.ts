import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { WITH_DESCRIPTION } from './examples/with-description.component';
import { WITH_ACTIONS } from './examples/with-actions.component';
import { WITH_CONTENT } from './examples/with-content.component';
import { WITHIN_CARD } from './examples/within-card.component';
import { EmptyStatePlaygroundKnobs } from './examples/playground.component';

@Component({
    selector: 'app-empty-state-doc',
    template: `<app-component-doc-scaffold [md]="md" mdFileName="EmptyState.md" [knobGroups]="knobGroups">
        <div examples class="app-example">
            <div class="example-section">
                <div class="example-heading">Basic Empty State</div>
                <div class="example-description">
                    The <code>&lt;blui-empty-state&gt;</code> accepts a <code>title</code> input and
                    <code>blui-empty-icon</code> content to create a basic placeholder.
                </div>
                <div class="example-demo-wrapper">
                    <app-basic-empty-state-demo></app-basic-empty-state-demo>
                </div>
                <app-example-code [snippet]="BASIC"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="BASIC"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Empty State with Description</div>
                <div class="example-description">
                    The <code>&lt;blui-empty-state&gt;</code> accepts an optional <code>description</code> input.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-description-empty-state-demo></app-with-description-empty-state-demo>
                </div>
                <app-example-code [snippet]="WITH_DESCRIPTION" dataLine="3"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITH_DESCRIPTION"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Empty State with Actions</div>
                <div class="example-description">
                    The <code>&lt;blui-empty-state&gt;</code> accepts an optional <code>actions</code> content to handle
                    events.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-actions-empty-state-demo></app-with-actions-empty-state-demo>
                </div>
                <app-example-code [snippet]="WITH_ACTIONS" dataLine="5-8"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITH_ACTIONS"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Empty State with Content Projection</div>
                <div class="example-description">
                    The <code>&lt;blui-empty-state&gt;</code> alternatively accepts <code>blui-title</code> and
                    <code>blui-description</code> content.
                </div>
                <div class="example-demo-wrapper">
                    <app-with-content-empty-state-demo></app-with-content-empty-state-demo>
                </div>
                <app-example-code [snippet]="WITH_CONTENT" dataLine="2-3"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITH_CONTENT"></app-copy-code-button>
                </div>
            </div>
            <div class="example-section">
                <div class="example-heading">Empty State within a Card</div>
                <div class="example-description">
                    The <code>&lt;blui-empty-state&gt;</code> can commonly appear within a card as a placeholder when
                    data is not found.
                </div>
                <div class="example-demo-wrapper">
                    <app-within-card-empty-state-demo></app-within-card-empty-state-demo>
                </div>
                <app-example-code [snippet]="WITHIN_CARD"></app-example-code>
                <div class="example-actions">
                    <app-copy-code-button [code]="WITHIN_CARD"></app-copy-code-button>
                </div>
            </div>
        </div>
        <app-empty-state-playground
            playground
            [inputs]="allProps"
            (codeChange)="generatedCode = $event"
        ></app-empty-state-playground>
        <app-example-code code [snippet]="generatedCode" [copyButtonOnHover]="true"></app-example-code>
    </app-component-doc-scaffold> `,
    styleUrls: ['./empty-state-doc.component.scss'],
})
export class EmptyStateDocComponent {
    md: string;

    BASIC = BASIC;
    WITH_DESCRIPTION = WITH_DESCRIPTION;
    WITH_ACTIONS = WITH_ACTIONS;
    WITH_CONTENT = WITH_CONTENT;
    WITHIN_CARD = WITHIN_CARD;

    generatedCode: string;

    requiredProps: Partial<EmptyStatePlaygroundKnobs> = {
        icon: {
            value: 'devices',
            type: 'select',
            options: ['devices', 'sensors_off', 'router'],
            hint: 'The large icon to display',
        },
    };

    optionalProps: Partial<EmptyStatePlaygroundKnobs> = {
        title: {
            value: 'No Devices',
            type: 'string',
            hint: 'The primary text to display (first line)',
        },
        description: {
            componentDefault: '',
            value: 'Check your network connection',
            type: 'string',
            hint: 'The secondary text to display (second line)',
        },
    };
    otherProps: Partial<EmptyStatePlaygroundKnobs> = {
        showAction: {
            value: true,
            type: 'boolean',
            hint: '',
            label: 'Show Action',
        },
    };
    allProps = Object.assign({}, this.requiredProps, this.optionalProps, this.otherProps);
    knobGroups = [
        {
            title: 'Required Properties',
            knobs: this.requiredProps,
            defaultExpanded: true,
        },
        {
            title: 'Optional Properties',
            knobs: this.optionalProps,
            defaultExpanded: true,
        },
        {
            title: 'Other Properties',
            knobs: this.otherProps,
            defaultExpanded: true,
        },
    ];
}