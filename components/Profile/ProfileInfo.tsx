import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/images/mobile company.png";
import LinearProgressBar from "./LinearProgressBar";

interface ProfileInfoProps {
  width?: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ width }) => {
  //   const containerWidth = width ?? 300;
  useEffect(() => {
    console.log("useEffect profileInfo");
  }, []);
  return (
    <div
      className={`flex flex-col bg-white text-black px-3 pb-3`}
      //   style={{ width: `${containerWidth}px` }}
    >
      <Image src={Logo} width={170} height={100} alt="Logo" />
      <p className="font-bold text-black">Store Profile</p>
      <LinearProgressBar curretValue={45} />
      <p className="text-sm text-green-400 underline cursor-pointer">
        Complete your profile
      </p>
    </div>
  );
};

export default ProfileInfo;
