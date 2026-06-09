import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Api } from '../../api'; 

export const authGuard: CanActivateFn = (route, state) => {
  const api = inject(Api);
  const router = inject(Router);

  if (api.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
