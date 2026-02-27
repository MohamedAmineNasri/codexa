import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const InviteFriend = () => {
  return (
    <div className="flex flex-col items-center mt-8 p-4 border rouded-xl bg-zinc-900 gap-3">
      <Image src={"/mail.png"} width={80} height={80} alt="Invite Friend" />
      <h2 className="text-3xl font-game">Invite Friend</h2>
      <p className="font-game">
        Having Fun? Share the love withe a friend! Enter an email and we wikk
        send them a personal invite link{" "}
      </p>
      <div className="flex gap-2 items-center mt-5">
        <Input placeholder="Enter Invite Email" className="min-w-sm" />
        <Button variant={'pixel'} className="font-game">Send Invite</Button>
      </div>
    </div>
  );
};

export default InviteFriend;
