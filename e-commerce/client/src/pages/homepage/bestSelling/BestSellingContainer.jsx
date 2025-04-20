import { productData } from "../../../assets/data/data"
import ItemCard from "../../../components/ui/ItemCard"

const BestSellingContainer = () => {
  return (
    <div className="flex overflow-x-scroll">
        {
            productData.slice(0,10).map(product=>(
                <ItemCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default BestSellingContainer