import React, { useState } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Layout from "@/components/Layout/Layout";
import PopupModal from "@/components/UI/PopupModal";
import MapHeader from "@/components/Map/MapHeader";
import MapFooter from "@/components/Map/MapFooter";

const map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBPqAkXpoMXnqpkhQiBXImC5EB8R-Cgli8",
  });
  if (!isLoaded) return;
  return <Map />;
};
const Map = () => {
  const [isShowModal, setIsShowModal] = useState(true);

  return (
    <Layout>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
        options={{ disableDefaultUI: true }}
      >
        {isShowModal && <PopupModal setIsShowModal={setIsShowModal} />}
        <MapHeader />
        <MapFooter />
      </GoogleMap>
    </Layout>
  );
};

export default map;
