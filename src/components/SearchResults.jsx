import "../index.css"

function SearchResults({ results }) {

  return(
    <div>
        <h2>Results: </h2>
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
                </div>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default SearchResults
