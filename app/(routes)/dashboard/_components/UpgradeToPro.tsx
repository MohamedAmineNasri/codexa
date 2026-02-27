import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpgradeToPro = () => {
  return (
    <div className="flex items-center flex-col p-5 border-4  rounded-2xl mt-8 bg-zinc-900">
      <Image src={"/logo.png"} width={70} height={70} alt="logo" />
      <h2 className="text-3xl font-game">Upgrade to Pro</h2>
      <p className="font-game text-gray-500 text-xl text-center">
        Join Pro Memebership and Get All course access
      </p>
      <Link href={"/pricing"}>
        <Button className="font-game cursor-pointer" variant={"pixel"} size={"lg"}>
          Upgrade{" "}
        </Button>
      </Link>
    </div>
  );
};

export default UpgradeToPro;
