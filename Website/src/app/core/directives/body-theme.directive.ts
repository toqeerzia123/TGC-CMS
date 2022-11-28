import { Directive, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
    selector: '[bodyTheme]'
})
export class BodyThemeDirective {
    constructor(private _route: ActivatedRoute) {
        _route.data.subscribe(
            res =>{
                document.body.className = res["body_class"];
            }
        );
    }
}