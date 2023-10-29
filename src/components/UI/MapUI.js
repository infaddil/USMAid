import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import React from "react";
import marker from "../../assets/images/icon-help-cadbury.png";

const usmBounds = {
  north: 7.3570,
  south: 5.3415,
  east: 80.0035,
  west: 100.2880
};

const MapUI = ({ className, children, setDetails, setOpenDrawer, openDrawer }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMceXioPyDosE73m8qh1ntuqMlml_fHj8",
  });
  if (!isLoaded) return null;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 5.3532, lng: 100.2979 }} // Updated center coordinates for DTSP USM
      mapContainerClassName={className}
      options={{ 
        disableDefaultUI: true,
        restriction: { latLngBounds: usmBounds, strictBounds: true } // USM bounds
      }}
    >
      <MarkerF
        position={{ lat: 5.3532, lng: 100.2979 }} // Marker position for DTSP USM
        options={{
          icon: {
            url: "https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/img/icon-help-cadbury.png",
            scaledSize: new window.google.maps.Size(70, 70),
          },
        }}
        onClick={() => { setDetails(true); setOpenDrawer(true); }}
      >
        {children}
      </MarkerF>
    </GoogleMap>
  );
};

export default MapUI;
