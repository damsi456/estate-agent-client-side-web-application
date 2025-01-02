import React, {useState} from "react";

function SearchForm(props){
    const [filters, setFilters] = useState({
        type: "",
        minPrice: "",
        maxPrice: "",
        minBedrooms: "",
        maxBedrooms: "",
        dateAfter: "",
        postcode: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFilters(f => ({...f, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(filters);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Property Type:
                <select name="type" value={filters.type} onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat / Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Land">Land</option>
                </select>
            </label><br/>
            <label>
                Price Range(&#163;):
                <select name="minPrice" value={filters.minPrice} onChange={handleChange}>
                    <option value="">No min</option>
                    <option value="50000">50,000</option>
                    <option value="75000">75,000</option>
                    <option value="100000">100,000</option>
                    <option value="125000">125,000</option>
                    <option value="150000">150,000</option>
                    <option value="175000">175,000</option>
                    <option value="200000">200,000</option>
                    <option value="225000">225,000</option>
                    <option value="250000">250,000</option>
                    <option value="275000">275,000</option>
                    <option value="300000">300,000</option>
                    <option value="350000">350,000</option>
                    <option value="400000">400,000</option>
                    <option value="450000">450,000</option>
                    <option value="500000">500,000</option>
                    <option value="550000">550,000</option>
                    <option value="600000">600,000</option>
                    <option value="700000">700,000</option>
                    <option value="800000">800,000</option>
                    <option value="900000">900,000</option>
                    <option value="1000000">1,000,000</option>
                    <option value="1250000">1,250,000</option>
                    <option value="1500000">1,500,000</option>
                    <option value="1750000">1,750,000</option>
                    <option value="2000000">2,000,000</option>
                    <option value="2500000">2,500,000</option>
                    <option value="3000000">3,000,000</option>
                    <option value="4000000">4,000,000</option>
                    <option value="5000000">5,000,000</option>
                    <option value="7500000">7,500,000</option>
                    <option value="10000000">10,000,000</option>
                    <option value="15000000">15,000,000</option>
                    <option value="20000000">20,000,000</option>
                </select> 
                <span> - </span>
                <select name="maxPrice" value={filters.maxPrice} onChange={handleChange}>
                    <option value="">No max</option>
                    <option value="50000">50,000</option>
                    <option value="75000">75,000</option>
                    <option value="100000">100,000</option>
                    <option value="125000">125,000</option>
                    <option value="150000">150,000</option>
                    <option value="175000">175,000</option>
                    <option value="200000">200,000</option>
                    <option value="225000">225,000</option>
                    <option value="250000">250,000</option>
                    <option value="275000">275,000</option>
                    <option value="300000">300,000</option>
                    <option value="350000">350,000</option>
                    <option value="400000">400,000</option>
                    <option value="450000">450,000</option>
                    <option value="500000">500,000</option>
                    <option value="550000">550,000</option>
                    <option value="600000">600,000</option>
                    <option value="700000">700,000</option>
                    <option value="800000">800,000</option>
                    <option value="900000">900,000</option>
                    <option value="1000000">1,000,000</option>
                    <option value="1250000">1,250,000</option>
                    <option value="1500000">1,500,000</option>
                    <option value="1750000">1,750,000</option>
                    <option value="2000000">2,000,000</option>
                    <option value="2500000">2,500,000</option>
                    <option value="3000000">3,000,000</option>
                    <option value="4000000">4,000,000</option>
                    <option value="5000000">5,000,000</option>
                    <option value="7500000">7,500,000</option>
                    <option value="10000000">10,000,000</option>
                    <option value="15000000">15,000,000</option>
                    <option value="20000000">20,000,000</option>
                </select>
            </label>
            <br/>
            <label>
                No. of bedrooms:
                <select name="minBedrooms" value={filters.minBedrooms} onChange={handleChange}>
                    <option value="">No min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <span> - </span>
                <select name="maxBedrooms" value={filters.maxBedrooms} onChange={handleChange}>
                    <option value="">No max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <br/>
            <label>
                Date Added After:
                <input type="date" name="dateAfter" value={filters.dateAfter} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Postcode Area:
                <input type="text" name="postcode" value={filters.postcode} onChange={handleChange} />
            </label>
            <br/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm
