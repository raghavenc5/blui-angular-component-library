/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

//brightlayer-ui modules
import { DrawerModule, EmptyStateModule } from '@brightlayer-ui/angular-components';

//material modules
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentDocsModule } from './pages/component-docs/component-docs.module';
import { AppCommonComponentsModule } from './components/components.module';

// Blui Lab
import { PasswordStrengthCheckerModule } from '@blui-lab/angular';

@NgModule({
    declarations: [AppComponent, HomeComponent, NavigationComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ComponentDocsModule,
        AppCommonComponentsModule,
        CommonModule,
        FormsModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        DrawerModule,
        EmptyStateModule,
        PasswordStrengthCheckerModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
