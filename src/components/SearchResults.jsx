import "../index.css"
import { Link } from "react-router-dom";

function SearchResults({ results }) {

  return(
    <div>
        {results.length === 0 ? (
            <p>No results found</p>
        ): (
          <ul className="results-list">
            {results.map((property) => (
              <li className="result-card" key={property.id}>
                <img src={property.picture} alt={property.type} className="property-image"/>
                <div className="property-details">
                  <h3>{property.location}</h3>
                  <p className="property-type">{property.type}</p>
                  <p className="property-price">&#163;{property.price.toLocaleString("en-UK")}</p>
                  <p className="property-description">{property.description.slice(0, 105)}...
                  </p>
                  <p className="property-date">Date added: {property.added.day}th {property.added.month}, {property.added.year}
                    </p><Link 
                  to={`/property/${property.id}`} 
                  className="card-link"><button className="property-more-button">More Details</button></Link>
                </div>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default SearchResults
