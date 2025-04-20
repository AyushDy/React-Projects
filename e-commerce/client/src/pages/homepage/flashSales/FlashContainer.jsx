import { productData } from "../../../assets/data/data"
import ItemCard from "../../../components/ui/ItemCard"

const FlashContainer = () => {


  return (
    <div className='w-full h-auto flex overflow-x-scroll my-12'>
        {
            productData.slice(0,12).map(item=> (
                <ItemCard key={item.id} product={item} />
            ))
        }
    </div>
  )
}

export default FlashContainer;