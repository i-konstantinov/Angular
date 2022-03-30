import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserListComponent } from "./user/user-list/user-list.component";

let routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: '/user-list'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);