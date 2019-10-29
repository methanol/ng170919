import { ProductsEffects } from './products.effects';
import { Type } from '@angular/core';
import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';


export const effects: Type<any>[] = [
  ProductsEffects,
  RouterEffects,
  AuthEffects
];
