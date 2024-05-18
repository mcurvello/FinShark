import React from 'react'
import './Card.css'
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="company logo"
      />
      <div className="details">
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>{searchResult.currency}</p>
        <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
      </div>
    </div>
  )
}

export default Card