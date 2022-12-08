import React from "react";
import Location from "./location";
// images
import CanadaMap from "../../assets/locations/desktop/image-map-canada.png"
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png"
import UKMap from "../../assets/locations/desktop/image-map-united-kingdom.png"
import CanadaTablet from "../../assets/locations/tablet/image-map-canada.png"
import AustraliaTablet from "../../assets/locations/tablet/image-map-australia.png"
import UKTablet from "../../assets/locations/tablet/image-map-uk.png"




const LocationCall=() => {
    return(
        <>
        <Location
        title="Canada"
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
        src={CanadaMap}
        />
        </>

    );

}

export default LocationCall