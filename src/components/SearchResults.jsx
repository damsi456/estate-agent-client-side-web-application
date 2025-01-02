function SearchResults({ results }) {

  return(
    <div>
        <h2>Results: </h2>
        {results.length === 0 ? (
            <p>No results found</p>
        ): (
            <ul>
            {results.map((property) => {
            console.log(property);
            return(
            <li key={property.id}>
                {property.type} - {property.price} - {property.location}
            </li>)
            })}
        </ul>
        )}
    </div>
  )
}

export default SearchResults
