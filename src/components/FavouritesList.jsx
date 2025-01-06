import { useDrop } from "react-dnd";
import "../index.css"

function FavouritesList ({favourites, addToFavourites, removeFromFavourites, clearFavourites}) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "PROPERTY",
        drop: (item) => addToFavourites(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{isOverRemove}, removeDrop] = useDrop(() => ({
        accept: "PROPERTY",
        droop: (item) => removeFromFavourites(item),
        collect: (monitor) => ({
            isOverRemove: !!monitor.isOver(),
        }),
    }));

    return (
        <div className="favourites-list">
            <h2>Favourites</h2>
            <div ref={drop}
                style={{
                    border: isOver ? "2px dashed green" : "2px solid #ddd",
                    padding: "1rem",
                    borderRadius: "8px",
                }}>
                {favourites.length === 0 ? (
                    <p>No favourites yet. Drag a property or click the button to add</p>
                ) : (
                    <ul>
                        {favourites.map((property) => (
                            <li key={property.id} 
                                ref={removeDrop}
                                style={{border: isOverRemove ? "2px dashed red" : "none"
                                }}
                                className="favourite-item">
                                <p><b>{property.location}</b> - <i>{property.type}</i> - &#163;{property.price.toLocaleString("en-UK")}</p>
                                <button className="remove-btn" onClick={() => removeFromFavourites(property)}>
                                <img src="src/assets/remove-circle-svgrepo-com.svg" alt="remove" width="20px" height="20px"/>
                                </button>
                            </li>          
                        ))}
                    </ul>
                )}
                {favourites.length > 0 && (
                    <button className="clear-btn" onClick={clearFavourites}>
                        Clear All
                    </button>
                )}
            </div>
        </div>
    );
};

export default FavouritesList;