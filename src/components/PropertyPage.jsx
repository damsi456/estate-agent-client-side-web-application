import { useParams } from "react-router-dom";
import properties from "../data/properties.json";

const PropertyPage = () => {
    const {id} = useParams();
    const property = properties.properties.find((property)=> property.id === id);

    return(
        <div className="property-page">
            <h1>{property.type}</h1>
            <img src={property.picture} alt={property.type} className="property-image-large"/>
        </div>
    )
};

export default PropertyPage;