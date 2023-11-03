import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const CartWidgetComponent = () => {
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} bounce size="2xl" style={{"--fa-primary-color": "#08aa82", "--fa-secondary-color": "#0fb88e",}} />
            
        </div>
    )
}

export default CartWidgetComponent 