import React from "react";
import { Accordion } from "../components/profile/Accordion";

export const Profile = () => {
  return (
    <div id="profile ">
      <div className="grid grid-cols-2 mb-5 px-5">
        <div className="bg-primer text-center">1</div>
        <div className="bg-birumuda2 text-center">2</div>
      </div>
      <Accordion />
    </div>
  );
};
