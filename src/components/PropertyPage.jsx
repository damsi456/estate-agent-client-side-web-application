import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactImageGallery from "react-image-gallery";
import "react-tabs/style/react-tabs.css";
import "react-image-gallery/styles/css/image-gallery.css"; 
import properties from "../data/properties.json";

const PropertyPage = () => {
    const {id} = useParams();
    const property = properties.properties.find((property)=> property.id === id);

    //Images for the gallery
    const images = property.pictures.map((picture) => ({
        original: picture,
        thumbnail: picture
    }));

    return(
        <div className="property-page">
            <ReactImageGallery items={images}/>
            <h1>{property.location}</h1>
            <Tabs>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Location</Tab>
                </TabList>

                <TabPanel>
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
                </TabPanel>

                <TabPanel>
                    <img src={`/${property.id}-images/${property.id}floorplan.png`} alt={`${property.id}-floor-plan`} className="floorplan-img"/>
                </TabPanel>

                <TabPanel>
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </TabPanel>
            </Tabs>
            <p className="property-page-date"> {property.added.day}th {property.added.month}, {property.added.year}
            </p>
        </div>
    )
};

export default PropertyPage;