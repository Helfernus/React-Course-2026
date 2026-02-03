import ProductItem from './ProductItem';
import classes from './Products.module.css';

export default function Products() {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title='Test' description='This is a first product - amazing!' price={6} id={100100} />
        <ProductItem title='Membership' description='Your gateway to unlimited possibilities!' price={14.99} id={100101} />
        <ProductItem title='Merchandise' description='Sweet sweet merch!' price={5.99} id={100102} />
      </ul>
    </section>
  );
};
