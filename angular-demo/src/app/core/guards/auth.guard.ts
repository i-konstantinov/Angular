import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";


Injectable()
export class AuthGuard implements CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (route.data && route.data['needsAuth']) { return false }
        return true;
    }
}