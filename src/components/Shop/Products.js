import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

const itemArr=[
  {
    id:'i1',
    title:'Pencil',
    price:20,
    description:'Amazing Pencil. magical pencil!'
  },
  {
    id:'i2',
    title:'Sharpener',
    price:10,
    description:'Sharpens your career'
  }
]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
         itemArr={itemArr}
        />
      </ul>
    </section>
  );
};

export default Products;
