import './App.css'
import { Listing } from './components/Listing.tsx'
import data from './data/etsy.json'

function App() {
  const listingItems = data.filter(el => el.state === 'active')
  return (
    <>
      <Listing items={listingItems}/>
    </>
  )
}

export default App
