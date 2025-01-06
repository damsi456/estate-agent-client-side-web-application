import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import properties from "./data/properties.json"
import SearchForm from "./components/SearchForm.jsx";
import SearchResults from "./components/SearchResults.jsx";
import FavouritesList from "./components/FavouritesList.jsx";
import PropertyPage from "./components/PropertyPage.jsx";
import "./index.css"

function App() {
    const[results, setResults] = useState(properties.properties);
    const[favourites, setFavourites] = useState([]);

    // functionality when user clikcs on search
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

        const priceMatch = (filters.minPrice === "" || property.price >= Number(filters.minPrice)) && 
                            (filters.maxPrice === "" || property.price <= Number(filters.maxPrice));

        const bedroomMatch = (filters.minBedrooms === "" || property.bedrooms >= Number(filters.minBedrooms)) && (filters.maxBedrooms === "" || property.bedrooms <= Number(filters.maxBedrooms));

        const dateMatch = filters.dateAfter === "" || new Date(property.added.year, monthMapping[property.added.month], property.added.day) >= new Date(filters.dateAfter);

        const postcodeMatch = filters.postcode === "" || property.location.endsWith(filters.postcode);

        return typeMatch && priceMatch && bedroomMatch && dateMatch && postcodeMatch;
        });
        setResults(filteredProperties);
    };

    // functionality of adding to favourite list
    function addToFavourites(property) {
      setFavourites((prevFavourites) => {
        // checking if the same item added again
        if (!prevFavourites.some((fav) => fav.id === property.id)) {
            console.log("Adding to favourites:", property);
            return [...prevFavourites, property];
        } else {
            console.log("Duplicate detected, skipping:", property);
            return prevFavourites; 
        }
    });
    };

    // favourite list items removing functionality
    function removeFromFavourites(property) {
      setFavourites((f) => f.filter((favourite) => favourite.id !== property.id));
    };

    function clearFavourites () {
      setFavourites([]);
    }

  return(
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="body">
              <h1>FindMyHomeUK</h1>
              <h2><span>Find</span> Your Dream Home <br/> with us</h2>
              <SearchForm onSearch = {handleSearch}/>
              <div className="results-section">
                <FavouritesList favourites={favourites} addToFavourites={addToFavourites} removeFromFavourites = {removeFromFavourites} clearFavourites = {clearFavourites}/>
                <SearchResults results = {results} addToFavourites={addToFavourites}/>
              </div>
            </div>
          }/>
          {/* route path based on prop id */}
          <Route path="/properties/:id" element={
            <div className="body">
              <PropertyPage />
            </div>}/>
        </Routes>
      </BrowserRouter>
    </DndProvider>
  )
}

export default App
