import { ProductsEffects } from './products.effects';
import { Type } from '@angular/core';
import { RouterEffects } from './router.effects';


export const effects: Type<any>[] = [ProductsEffects, RouterEffects];
