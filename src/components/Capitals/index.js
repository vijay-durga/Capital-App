import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    requiredCapitalId: countryAndCapitalsList[0].id,
  }

  onChangingCountries = event => {
    this.setState({
      requiredCapitalId: event.target.value,
    })
  }

  getCountry = requiredCapitalId => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      each => each.id === requiredCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {requiredCapitalId} = this.state
    const country = this.getCountry(requiredCapitalId)

    return (
      <div className="main-bg-cont">
        <div className="bg-cont">
          <h1 className="head">Countries And Capitals</h1>
          <div>
            <select
              className="select"
              value={requiredCapitalId}
              onChange={this.onChangingCountries}
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="span">is capital of which country?</span>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
