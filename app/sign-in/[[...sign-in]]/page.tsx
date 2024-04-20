import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center pt-16">
      <SignIn />
    </div>
  );
};

export default page;
