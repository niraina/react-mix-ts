import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import TableHead from '../components/TableHead'
import { ProductInterface } from '../interfaces/product'
import { getAll } from '../api'

const Products: React.FC = () => {
  const headers = ["reference", "type", "categorie", "prix", "quantité"];
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const fetchProduct = async () => {
    const data = await getAll('product');
    setProducts(data);
  }

  useEffect(() => {
    fetchProduct();
  }, [])
  return (
    <div className='container'>
      <Table striped bordered hover>
          <TableHead headers={headers}/>
          <tbody>
            {
              products?.map((product) => (
                <tr key={product._id}>
                  <td>{product.reference}</td>
                  <td>{product.type}</td>
                  <td>{product.categorie}</td>
                  <td>{product.prix} Ar</td>
                  <td>{product.qunatiter}</td>
                </tr>
              ))
            }
          </tbody>
      </Table>
    </div>
  )
}

export default Products