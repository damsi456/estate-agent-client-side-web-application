import React,{useState} from "react";
import properties from "./data/properties.json"
import SearchForm from "./components/SearchForm.jsx";

function App() {
  const[results, setResults] = useState([properties.properties]);

    function handleSearch(filters){
      const monthMapping = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
      };

      const filteredProperties  = properties.properties.filter((property) => {
        const typeMatch = filters.type === "" || property.type === filters.type;
        const priceMatch = filters.minPrice === "" || property.price >= Number(filters.minPrice) && filters.maxPrice === "" || property.price <= Number(filters.maxPrice);
        const bedroomMatch = filters.minBedrooms === "" || property.bedrooms >= Number(filters.minBedrooms) && filters.maxBedrooms === "" || property.bedrooms <= Number(filters.maxBedrooms);
        const dateMatch = filters.dateAfter === "" || new Date(property.added.year, monthMapping[property.added.month], property.added.day) >= new Date(filters.dateAfter)
        const postcodeMatch = filters.postcode === "" || property.location.endsWith(filters.postcode);

        console.log(typeMatch, priceMatch, bedroomMatch, dateMatch, postcodeMatch);
        return typeMatch && priceMatch && bedroomMatch && dateMatch && postcodeMatch;
      });
      setResults(filteredProperties);
    };

  return(
    <div>
      <h1>Estate Agent App</h1>
      <SearchForm onSearch={handleSearch}/>
      <div>
        <h2>Results: </h2>
        {results.length > 0 ? (
          <ul>
            {results.map((property) => (
              <li key={property.id}>
                {property.type} - {property.price} - {property.location}
              </li>
            ))}
          </ul>
          ): (
            <p>No results found</p>
          )
        }
      </div>
    </div>
    
  )
}

export default App
