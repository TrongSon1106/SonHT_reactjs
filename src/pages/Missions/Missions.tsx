import React, { useState } from "react";
import MissionCard from "./components/MissionCard";
import { IMission } from "../../types/mission";
import { missions } from "../../data/mockup";

type Props = {};

// TODO: Make three Button to filter missions: Happening, Coming, Expired
const Missions = (props: Props) => {
  const [list] = useState<IMission[]>(missions);

  return (
    <div style={{ padding: "120px 0" }}>
      {list.map((missionCard) => {
        return <MissionCard info={missionCard} />;
      })}
    </div>
  );
};

export default Missions;
