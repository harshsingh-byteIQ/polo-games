import { ReactNode } from "react";
import CricketSection from "../Components/Tabs/Cricket";
import SoccerSection from "../Components/Tabs/Soccer";
import TennisSection from "../Components/Tabs/Tennis";
import HorseRidding from "../Components/Tabs/HorseRidding";
import InPlay from "../Components/Tabs/InPlay";
import Footer from "../Components/Footer";
import GameGallery from "../Components/GameGallery";
import CasinoGallery from "../Components/CasinoGallery";

interface RouteBase {
  path: string;
  element: ReactNode;
}

interface ProctectedRoutes extends RouteBase {
  roles: string[];
}

export const proctectedRoutes: ProctectedRoutes[] = [
  {
    path: "/",
    element: <></>,
    roles: [],
  },
];

export const globalRoutes = [
  {
    path: "",
    element: (
      <>
        <InPlay></InPlay>
        <CricketSection></CricketSection>
        <SoccerSection></SoccerSection>
        <TennisSection></TennisSection>
        <HorseRidding></HorseRidding>
        <GameGallery></GameGallery>
        <CasinoGallery></CasinoGallery>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "home",
    element: (
      <>
        <InPlay></InPlay>
        <CricketSection></CricketSection>
        <SoccerSection></SoccerSection>
        <TennisSection></TennisSection>
        <HorseRidding></HorseRidding>
        <GameGallery></GameGallery>
        <CasinoGallery></CasinoGallery>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "in-play",
    element: (
      <>
        <InPlay></InPlay>
        <CricketSection></CricketSection>
        <SoccerSection></SoccerSection>
        <TennisSection></TennisSection>
        <HorseRidding></HorseRidding>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "cricket",
    element: <>
    <CricketSection></CricketSection>
    <Footer></Footer>
    </>
  },
  {
    path: "soccer",
    element: 
    <>
    <SoccerSection></SoccerSection>,
    <Footer></Footer>
    </>
  },
  {
    path: "tennis",
    element: 
    <>
      <TennisSection></TennisSection>,
      <Footer></Footer>
    </>
  },
  {
    path: "horse-racing",
    element: 
    <>
    <HorseRidding></HorseRidding>
    <Footer></Footer>
    </>
  },
];
