"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const UserStatus = () => {
  const { user } = useUser();
  return (
    <div className="p-4 border-4 rounded-2xl bg-zinc-900 ">
      <div className="flex gap-3 items-center">
        <Image
          src={"/alex_walk.gif"}
          alt="walking_user-gif"
          width={70}
          height={70}
        />
        <h2 className="font-game text-xl">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex gap-2 items-center">
          <Image src={"/star.png"} width={35} height={35} alt="star" />
          <div>
            <h2 className="font-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-400">Total Rewards</h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={"/badge.png"} width={35} height={35} alt="badge" />
          <div>
            <h2 className="font-3xl font-game">3</h2>
            <h2 className="font-game text-xl text-gray-400">Badge</h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={"/fire.png"} width={35} height={35} alt="fire" />
          <div>
            <h2 className="font-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-400">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
