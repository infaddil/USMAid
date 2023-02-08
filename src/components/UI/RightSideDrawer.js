import React, { useState } from "react";
import List from "../Map/List";
import ListDetails from "../Map/ListDetails";
import Search from "../Map/Search";
import Input from "./Input";
import styles from "../../styles/Drawer.module.css"

const DUMMY_DATA = [
  {
    id: "#NH242685",
    distance: 8.93,
    location:
      "D-G-11, APARTMENT KENANGA, Taman Putra Perdana, 47130 Puchong, Selangor, Malaysia",
    address: "D-4-1, Kenanga Apartment",
    name: "Hafiz",
    text: "I was a bit depressed and thinking about fate. I need money to cover the care of 10 (now 12) cats with my grab account being blocked because my car has an outstanding speed limit summons. The car payment to the bank has also been overdue for a month because I still havent found a new job and have a lot of debt. Financial help tree for me to recover from the current situation. 🙏🏻 If anyone is able to give me a loan, I would greatly appreciate it. I promise to pay back. Islamic Bank. Muhammad Hafizuddin Bin Zaidi 07043020460873 Thank you 🙏🏻",
    tags: [
      {
        id: "t1",
        tagName: "🏠 Household Goods",
      },
      {
        id: "t2",
        tagName: "🏠 Household Goods",
      },
    ],
  },
];

const RightSideDrawer = ({ isSearch, setIsSearch, details, setDetails, setLoginModal, openDrawer,setOpenDrawer }) => {
  
  return (
    
    <div className={`${openDrawer && `${styles.openSlideAnimation}`}  absolute right-0 top-0 py-4 w-full dark:bg-[#292929]  md:w-1/3 lg:w-1/4 h-screen overflow-x-scroll`}>
      <div>
      {!isSearch && !details && <Input setOpenDrawer={setOpenDrawer} />}
      {!isSearch && !details && (
        <List data={DUMMY_DATA} setDetails={setDetails} />
      )}
      {isSearch && !details && <Search setIsSearch={setIsSearch} />}
      {details && <ListDetails data={DUMMY_DATA} setDetails={setDetails} setLoginModal={setLoginModal} />}</div>
    </div>
  );
};

export default RightSideDrawer;
