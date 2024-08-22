import { wait } from "@/lib/posts";
import React from "react";

const Page = async () => {
  await wait(2000);

  return <div>About Page</div>;
};

export default Page;
