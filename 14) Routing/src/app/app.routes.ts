import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./header/not-found/not-found.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 1){
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized!'));
}

export const routes: Routes = [
    {
        path: '', //<your-domain>/
        component: NoTaskComponent,

        // redirectTo: '/users/u1',
        // pathMatch: 'full'
        title: 'No task selected.'
    },
    {
        path: 'users/:userId', //<your-domain>/users/<u-id>
        component: UserTasksComponent,        
        children: userRoutes,
        canMatch: [dummyCanMatch],
        data: {
            message: 'Hello!',  //static data to routes
        },
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];