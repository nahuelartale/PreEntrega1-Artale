const ItemListContainerComponent = ({greeting}) => {
    const greentingStyles = {
        fontSize: '3rem',
        fontwight: '700',
        textAling: 'center',
        color: 'palegoldenrod',
    }
    return (
        <div style={greentingStyles}>
            {greeting}
        </div>
    )
}

export default ItemListContainerComponent