import { Link, useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const params = useParams();
  const productIdentifier = params.productId;

  return <>
    <h1>Product Details!</h1>
    <p>{productIdentifier}</p>
    <p><Link to='..' relative='path'>Back</Link></p>
  </>;
}