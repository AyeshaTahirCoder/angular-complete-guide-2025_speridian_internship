import { Directive, inject, input, effect, ViewContainerRef, TemplateRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

//structural Directive
@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();

      }
    });
   }

}
