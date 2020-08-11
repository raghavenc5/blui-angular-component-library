import { ElementRef } from '@angular/core';

export function requireInput<T>(inputs: Array<keyof T>, component: any): void {
    inputs.forEach((input: any) => {
        if (component[input] === undefined || component[input] === null || component[input] === '') {
            const name: string = component.constructor.name;
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${name} error: Property "${input}" is required.`);
        }
    });
}

export function requireContent(contentPairs: ContentPair[], component: any): void {
    contentPairs.forEach((contentPair) => {
        if (!contentPair.ref.nativeElement.children || contentPair.ref.nativeElement.children.length === 0) {
            const name: string = component.constructor.name;
            // eslint-disable-next-line no-console
            console.warn(`PXBlue ${name} error: Selector "${contentPair.selector}" is required.`);
        }
    });
}

function hasChildren(el: ElementRef): boolean {
    return el.nativeElement.children && el.nativeElement.children.length > 0;
}

// Sibling could be a comment? 
function hasSibling(el: ElementRef): boolean {
    return el.nativeElement.nextSibling !== null;
}

export function isEmptyView(el: ElementRef): boolean {

    if (!el || !el.nativeElement) {
        return true;
    }
    return !(hasChildren(el) || hasSibling(el));
}

export type ContentPair = {
    selector: string;
    ref: ElementRef;
};
