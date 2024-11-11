import Image from 'next/image'
import Banner from './components/Banner'
import { products } from './utils/Products'
import { truncateText } from './utils/TruncateText'
import ProductCart from './components/products/ProductCart'

export default function Home() {
  return (
    
    <div className='p-8'>
      <Banner />
      <div className='grid grid-cols-2 sm:grid-cols-3
                      lg:grid-cols-4 gap-8
      '>
          {products.map((product:any)=>(
            <div>
              <ProductCart key={product.id} data={product}/>
            </div>
          ))
          }
      </div>
    </div>
   
    
  )
}
