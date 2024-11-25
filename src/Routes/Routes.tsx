import { ReactNode } from "react";
import CricketSection from "../Components/Tabs/Cricket";
import SoccerSection from "../Components/Tabs/Soccer";
import TennisSection from "../Components/Tabs/Tennis";
import HorseRidding from "../Components/Tabs/HorseRidding";
import InPlay from "../Components/Tabs/InPlay";

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
      </>
    ),
  },
  {
    path: "cricket",
    element: <CricketSection></CricketSection>,
  },
  {
    path: "soccer",
    element: <SoccerSection></SoccerSection>,
  },
  {
    path: "tennis",
    element: <TennisSection></TennisSection>,
  },
  {
    path: "horse-racing",
    element: <HorseRidding></HorseRidding>,
  },
];
