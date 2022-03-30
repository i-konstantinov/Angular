import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";

@Injectable()
export class ParamsActivate implements CanActivate {
    constructor(private router: Router) { };
    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        console.log(route);
        if ("id" in route.params && Number(route.params['id']) < 11 && route.params['id'] > 0) {
            return true;
        };
        return this.router.parseUrl(route.data['redirectUrl']);
    }
}
