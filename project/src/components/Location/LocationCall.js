import React from "react";
import Location from "./location";
import './location.css'
// images
import CanadaMap from "../../assets/locations/desktop/image-map-canada.png"
import AustraliaMap from "../../assets/locations/desktop/image-map-australia.png"
import UKMap from "../../assets/locations/desktop/image-map-united-kingdom.png"
import CanadaTablet from "../../assets/locations/tablet/image-map-canada.png"
import AustraliaTablet from "../../assets/locations/tablet/image-map-australia.png"
import UKTablet from "../../assets/locations/tablet/image-map-uk.png"




const LocationCall=() => {
    return(
        <div className="loc-page-main">
        <Location
        title="Canada"
        titleA= "Designo  Central Office"
        subtitle= "3886 Wellington Street"
        other="Toronto, Ontario M9C 3J5"
        phone=""
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
        src={CanadaMap}
        phone="P : +1 253-863-8967"
        mail="M : contact@designo.co"

        />
         <Location
          title="Canada"
          titleA= "Designo  Central Office"
          subtitle= "3886 Wellington Street"
          other="Toronto, Ontario M9C 3J5"
          phone=""
        src={AustraliaMap}
        title="Australia"
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${AustraliaTablet} 689w, ${AustraliaMap} 375w`} />
         
         <Location
          title="Canada"
          titleA= "Designo  Central Office"
          subtitle= "3886 Wellington Street"
          other="Toronto, Ontario M9C 3J5"
          phone=""
        src={UKMap}
        title="United Kingdom"
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${UKTablet} 689w, ${UKMap} 375w`} />
        </div>

    );

}

export default LocationCall