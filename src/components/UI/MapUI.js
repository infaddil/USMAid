import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const MapUI = ({ className, children }) => {
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
      {children}
    </GoogleMap>
  );
};

export default MapUI;
