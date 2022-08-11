import { ProductHttpService } from './service/product-http.service';

(async ()=> {
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    const productId = products[2].id;
    console.log('--'.repeat(10));
    console.log('update');

    await productService.update(productId, {
      price: 2599,
      title: 'new tittle product',
      description: 'fuck description'
    });
    console.log('--'.repeat(10));
    console.log('findOne');

    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }

})();
