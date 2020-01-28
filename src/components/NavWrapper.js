import React from "react";
import { useParams } from "react-router-dom";
import items from "../data";




const NavWrapper = (props) => {

    const { itemID } = useParams();
    const pickedItem = items.find(
        navItem => Number(itemID) === navItem.id
    );

    return (
        <div className="nav-wrapper">
            <div className="nav-header">
                <img
                src={pickedItem.imageUrl}
                alt={pickedItem.name}/>
            </div>
      </div>
    )

}

export default NavWrapper