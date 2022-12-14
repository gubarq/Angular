import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { OfferModule } from "../offer/offer.module";



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        ErrorComponent
    ],
    providers: [
    // {
    //   provide: 'Test',
    //   useValue: 'Best'
    // }
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        OfferModule
    ]
})
export class CoreModule { }
