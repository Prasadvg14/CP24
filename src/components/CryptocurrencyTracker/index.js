import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoaded: false}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const result = await response.json()

    const currencyList = result.map(results => ({
      currencyName: results.currency_name,
      usdValue: results.usd_value,
      euroValue: results.euro_value,
      id: results.id,
      currencyLogo: results.currency_logo,
    }))

    this.setState({cryptoList: currencyList, isLoaded: true})
  }

  render() {
    const {cryptoList, isLoaded} = this.state
    return (
      <div className="bg">
        {isLoaded ? (
          <div className="bg1">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList cryptoList={cryptoList} />
          </div>
        ) : (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
