import React, { useRef} from 'react'
import { categoryList } from '../../../assets/data/data'
import TopHeader from '../../../components/ui/TopHeader'
import CategoryBox from "./CatergoryBox"
import CategoryHeader from './CategoryHeader'

const BrowseCategories = () => {
  const containerRef = useRef(null);

  return (
    <div className='my-20 border-b-2 border-gray-200 pb-20'>
    <TopHeader title={"Categories"}/>
    <CategoryHeader containerRef={containerRef} />
     <div 
      ref={containerRef}
      className='flex overflow-x-scroll'>
     {
      categoryList.map(category=>(
        <CategoryBox key={category.name} item={category} />
      ))
     }
     </div>
    </div>
  )
}

export default BrowseCategories