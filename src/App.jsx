import React,{useState} from "react";
import properties from "./data/properties.json"
import SearchForm from "./components/SearchForm.jsx";
import SearchResults from "./components/SearchResults.jsx";
import "./index.css"

function App() {
    const[results, setResults] = useState(properties.properties);

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

        const priceMatch = filters.minPrice === "" || property.price >= Number(filters.minPrice) && 
                            filters.maxPrice === "" || property.price <= Number(filters.maxPrice);

        const bedroomMatch = filters.minBedrooms === "" || property.bedrooms >= Number(filters.minBedrooms) && 
                                filters.maxBedrooms === "" || property.bedrooms <= Number(filters.maxBedrooms);

        const dateMatch = filters.dateAfter === "" || new Date(property.added.year, monthMapping[property.added.month], property.added.day) >= new Date(filters.dateAfter);

        const postcodeMatch = filters.postcode === "" || property.location.endsWith(filters.postcode);

        return typeMatch && priceMatch && bedroomMatch && dateMatch && postcodeMatch;
        });
        setResults(filteredProperties);
    };

  return(
    <body>
        <h1>FindMyHomeUK</h1>
        <h2><span>Find</span> Your Dream Home <br/> with us</h2>
        <SearchForm onSearch = {handleSearch}/>
        <SearchResults results = {results}/>
    </body>
  )
}

export default App
