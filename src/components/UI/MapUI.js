import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import { useLoadScript, GoogleMap, MarkerF, Circle } from "@react-google-maps/api";
import React from "react";
import marker from "../../assets/images/icon-help-cadbury.png";

const center = { lat: 5.3532, lng: 100.2979 }; // DTSP USM location

// Function to calculate bounds for a 5km radius around the center
const getBounds = (center, radius) => {
  const latRadian = center.lat * (Math.PI / 180);

  const degLatKm = 110.574235;
  const degLongKm = 110.572833 * Math.cos(latRadian);
  const deltaLat = radius / degLatKm;
  const deltaLong = radius / degLongKm;

  return {
    north: center.lat + deltaLat,
    south: center.lat - deltaLat,
    east: center.lng + deltaLong,
    west: center.lng - deltaLong,
  };
};

const bounds = getBounds(center, 2000); // 5km radius

const MapUI = ({ className, children, setDetails, setOpenDrawer, openDrawer }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMceXioPyDosE73m8qh1ntuqMlml_fHj8",
  });
  if (!isLoaded) return null;
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={className}
      options={{
        disableDefaultUI: true,
        restriction: { latLngBounds: bounds, strictBounds: true },
      }}
    >
      <MarkerF
        position={center} // Marker position for DTSP USM
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
      <Circle // Circle component to visualize the 5km radius
        center={center}
        radius={2000} // 5km in meters
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.15,
        }}
      />
    </GoogleMap>
  );
};

export default MapUI;
