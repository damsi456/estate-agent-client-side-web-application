import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

const PropertyPage = () => {
    const {id} = useParams();
    const property = properties.properties.find((property)=> property.id === id);

    return(
        <div className="property-page">
            <img src={property.picture} alt={property.type} className="property-image-large"/>
            <h1>{property.location}</h1>
            <p>
                <b>Type:</b> {property.type}
            </p>
            <p>
                <b>Price:</b> {property.price}
            </p>
            <p>
                <b>Tenure:</b> {property.tenure}
            </p>
            <p>
                <b>No. of Bedrooms:</b> {property.bedrooms}
            </p>
            <p><b>Description:</b></p>
            <p className="property-page-description">{property.description}</p>
            <p className="property-page-date"> {property.added.day}th {property.added.month}, {property.added.year}
            </p>
        </div>
    )
};

export default PropertyPage;