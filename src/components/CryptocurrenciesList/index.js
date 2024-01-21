import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="list">
      <div className="header">
        <p className="k">Coin Type</p>
        <div className="right">
          <p className="k">USD</p>
          <p className="k">EURO</p>
        </div>
      </div>
      {cryptoList.map(each => (
        <CryptocurrencyItem key={each.id} currencyItem={each} />
      ))}
    </div>
  )
}

export default CryptocurrenciesList
