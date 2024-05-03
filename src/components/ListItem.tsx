import Iitem from '../interfaces/Iitem'

interface itemProps {
	item: Iitem;
}
export const ListItem = ({item}: itemProps) => {
	const itemTitle = item.title?.length && item.title.length > 49 ? item.title.slice(0, 50) + ' ...' : item.title

	let formattedPrice = null
	
	if (item.currency_code == 'USD') {
		formattedPrice = `$${item.price}`
	} else if (item.currency_code == 'EUR') {
		formattedPrice = `€${item.price}`
	} else {
		formattedPrice = `${item.price}${item.currency_code}`
	}

	const actualClass : string = item.quantity <= 10 ? 'level-low': item.quantity <= 20 ? 'level-medium' : item.quantity > 20 ? 'level-high' : '';

  return (
    <div>
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage?.url_570xN}/>
          </a>
        </div>

				<div className="item-details">
					<p className="item-title">
						{itemTitle}
					</p>

					<p className="item-price">
						{formattedPrice}
					</p>

					<p className={`item-quantity ${actualClass}`}>
						{item.quantity}
					</p>
				</div>
      </div>
    </div>
  )
}
