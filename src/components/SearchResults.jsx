import "../index.css"
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

function SearchResults({results, addToFavourites}) {

  return(
    <div>
        {results.length === 0 ? (
            <p>No results found</p>
        ): (
          <ul className="results-list">
            {results.map((property) => {
              const [{isDragging}, drag] = useDrag(() => ({
                type: "PROPERTY",
                item: property,
                collect: (monitor) => ({
                  isDragging: !!monitor.isDragging(),
                }),
              }));

              return(  
                <li key={property.id}
                    ref={drag}
                    style={{
                      opacity: isDragging ? 0.5 : 1,
                      cursor: "move",
                    }}
                    className="result-card" 
                >
                  <img src={property.picture} alt={property.type} className="property-image"/>

                  <div className="property-details">
                    <h3>{property.location}</h3>

                    <p className="property-type">{property.type}</p>

                    <p className="property-price">&#163;{property.price.toLocaleString("en-UK")}</p>

                    <p className="property-description">{property.description.slice(0, 200)}...
                    </p>

                    <p className="property-date">Date added: {property.added.day}th {property.added.month}, {property.added.year}
                    </p>

                    <div className="property-buttons">
                      <Link 
                      to={`/properties/${property.id}`} 
                      className="card-link"><button className="property-more-button">More Details</button></Link>
                      <button className="favourite-btn" onClick={() => addToFavourites(property)}>
                        Add to favourites
                      </button>
                    </div>
                    
                  </div>
                </li>
              );
            })}
          </ul>
        )}
    </div>
  )
}

export default SearchResults
