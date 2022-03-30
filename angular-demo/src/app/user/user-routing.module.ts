import { Routes, RouterModule } from "@angular/router";
import { ParamsActivate } from "../core/guards/params.activate";
import { UserDetailsComponent } from "../user/user-details/user-details.component";
import { UserListComponent } from "../user/user-list/user-list.component";

let routes: Routes = [

    {
        path: "user-list",
        component: UserListComponent
    },
    {
        path: 'details/:id',
        component: UserDetailsComponent,
        canActivate: [ ParamsActivate ],
        data: {
            hasProps: ["id"],
            redirectUrl: "user-list",
        }
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);