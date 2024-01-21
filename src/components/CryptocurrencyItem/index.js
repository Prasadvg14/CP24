// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <li className="item">
      <div className="each">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="p">{currencyName}</p>
      </div>
      <div className="each2">
        <p> {usdValue}</p>
        <p className="p">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
