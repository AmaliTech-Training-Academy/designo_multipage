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
        phone="P : +1 253-863-8967"
        mail="M : contact@designo.co"
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${CanadaTablet} 689w, ${CanadaMap} 375w`}
        src={CanadaMap}
        

        />
         <Location
          title="Australia"
          titleA= "Designo AU Office"
          subtitle= "19 Balonne Street"
          other="New South Wales 2443"
          phone="P : (02) 6720 9092"
          mail="M : contact@designo.au"
        src={AustraliaMap}
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${AustraliaTablet} 689w, ${AustraliaMap} 375w`} />
         
         <Location
          title="United Kingdom"
          titleA= "Designo UK Office"
          subtitle= "13  Colorado Way"
          other="Rhyd-y-fro SA8 9GA"
          phone="P : 078 3115 1400"
          mail="M : contact@designo.uk"
        src={UKMap}
        sizes="(min-width: 1090px) 341px, (min-width: 650px) 40vw,  50vw"
        srcSet={`${UKTablet} 689w, ${UKMap} 375w`} />
        </div>

    );

}

export default LocationCall