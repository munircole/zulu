import { NgModule } from "@angular/core";
import { MatIconModule} from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatTabsModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatStepperModule,
        MatInputModule,
        MatTreeModule
        

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatStepperModule,
        MatInputModule,
        MatTreeModule

    ]
})

export class MaterialModule {}