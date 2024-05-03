import  './Listing.css'
import { ListItem } from './ListItem'
import Iitem from '../interfaces/Iitem'

interface itemsProps {
  items: Iitem[];
}

export const Listing = ({items}: itemsProps) => {
  return (
    <div className='item-list'>
      {items.map((item) => (
        <ListItem 
          key={item.listing_id} 
          item={item}
        />
      ))}
    </div>
  )
}