import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import LocationModal from "@/components/UI/LocationModal";
import MapHeader from "@/components/Map/MapHeader";
import MapFooter from "@/components/Map/MapFooter";
import RightSideDrawer from "@/components/UI/RightSideDrawer";
import MapUI from "@/components/UI/MapUI";
import LoginModal from "@/components/UI/LoginModal";

const map = () => {



  const [locationModal, setLocationModal] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      if(windowWidth > 786) setOpenDrawer(true);
     }
  },[])
 
  return (
    <Layout>
      <div className="flex justify-between w-full  h-screen">
       {<div
          className={`
          ${
            !openDrawer ? "w-full transition-all cursor-pointer " : "hidden md:block w-full md:w-2/3 lg:w-3/4 cursor-pointer"
          }`}
        >
          <MapUI className="map-container" setDetails={setDetails} setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}>
            {!details && (
              <MapHeader
                isSearch={isSearch}
                setIsSearch={setIsSearch}
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                setLoginModal={setLoginModal}
              />
            )}
            <MapFooter openDrawer={openDrawer} />
          </MapUI>
        </div>
}
        {locationModal && <LocationModal setLocationModal={setLocationModal} />}
        {loginModal && <LoginModal setLoginModal={setLoginModal} />}
        {openDrawer && (
          <div className={`md:block md:w-1/3 lg:w-1/4`}>
            <RightSideDrawer
              isSearch={isSearch}
              setIsSearch={setIsSearch}
              details={details}
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              setDetails={setDetails}
              setLoginModal={setLoginModal}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default map;
