import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllServices from "./tabs/AllServices";
import Catering from "./tabs/Catering";
import PhotoAndVideography from "./tabs/PhotoAndVideography";
import MusicAndVisuals from "./tabs/MusicAndVisuals";
import DecorationAndCateringEquipment from "./tabs/DecorationAndCateringEquipment";
import Venues from "./tabs/Venues";
import MakeupAndFashion from "./tabs/MakeupAndFashion";
import Transportation from "./tabs/Transportation";
import BarAndDrinks from "./tabs/BarAndDrinks";
import DissertsAndSnacks from "./tabs/DessertsAndSnacks";

const Services = () => {
  return (
    <div>
      <div>
        <Tabs
          className="bg-slate-100"
          defaultIndex={1}
          onSelect={(index) => console.log(index)}
        >
          <TabList className="font-semibold text-xs lg:text-sm justify-between absolute md:sticky md:top-16 z-50 bg-slate-400">
            <Tab>All Services</Tab>
            <Tab>Catering</Tab>
            <Tab>Photo & Videography</Tab>
            <Tab>Music & Visuals</Tab>
            <Tab>Decoration & Catering Equipment</Tab>
            <Tab>Security Service</Tab>
            <Tab>Venues</Tab>
            <Tab>Makeup & Fashion</Tab>
            <Tab>Transportation</Tab>
            <Tab>Bar & Drinks</Tab>
            <Tab>Desserts And Snacks</Tab>
          </TabList>

          <TabPanel><AllServices></AllServices></TabPanel>
          <TabPanel><Catering></Catering></TabPanel>
          <TabPanel><PhotoAndVideography></PhotoAndVideography></TabPanel>
          <TabPanel><MusicAndVisuals></MusicAndVisuals></TabPanel>
          <TabPanel><DecorationAndCateringEquipment></DecorationAndCateringEquipment></TabPanel>
          <TabPanel><Venues></Venues></TabPanel>
          <TabPanel><MakeupAndFashion></MakeupAndFashion></TabPanel>
          <TabPanel><Transportation></Transportation></TabPanel>
          <TabPanel><BarAndDrinks></BarAndDrinks></TabPanel>
          <TabPanel><BarAndDrinks></BarAndDrinks></TabPanel>
          <TabPanel><DissertsAndSnacks></DissertsAndSnacks></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
