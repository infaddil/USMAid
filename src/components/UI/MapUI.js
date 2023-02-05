import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import React from "react";
import marker from "../../assets/images/icon-help-cadbury.png";

const MapUI = ({ className, children, setDetails, setOpenDrawer,openDrawer }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBPqAkXpoMXnqpkhQiBXImC5EB8R-Cgli8",
  });
  if (!isLoaded) return;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={className}
      options={{ disableDefaultUI: true }}
    >
      <MarkerF
        position={{ lat: 44, lng: -80 }}
        options={{
          icon: {
            url: "https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/img/icon-help-cadbury.png",
            scaledSize: new window.google.maps.Size(70, 70),
          },
        }}
        onClick={ () => {setDetails(true), setOpenDrawer(!openDrawer) }}
      />
      {children}
    </GoogleMap>
  );
};

export default MapUI;
