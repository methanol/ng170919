import { IProduct } from '@store/reducers/products.reducer';
import { ProductsFilterPipe } from './products-filter.pipe';

const products: IProduct[] = [
  {
    author: 'Vlad',
    img: 'assets/img/product-2.jpg',
    isFavorite: false,
    price: 221,
    title: 'Product 1',
    _id: '5dbc40267a191bd0a9c32ca9'
  },
  {
    author: 'Vlad',
    img: 'assets/img/product-2.jpg',
    isFavorite: true,
    price: 221,
    title: 'Product 2',
    _id: '5dbc40267a191bd0a9c32ca9'
  },
  {
    author: 'Vlad',
    img: 'assets/img/product-2.jpg',
    isFavorite: false,
    price: 221,
    title: 'Product 3',
    _id: '5dbc40267a191bd0a9c32ca9'
  }
];

describe('Products filter pipe', () => {
  let productsFilterPipe: ProductsFilterPipe;
  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });

  it('should filter', () => {
    expect(productsFilterPipe.transform(products, '')).toEqual(products);
    expect(productsFilterPipe.transform(products, '', true))
      .toEqual([products[1]]);
    expect(productsFilterPipe.transform(products, 'Product 3'))
      .toEqual([products[2]]);
  });
});
