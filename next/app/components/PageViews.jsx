import { wait } from "@/lib/posts";
import React from "react";

const PageViews = async ({ slug }) => {
  //fetch view counts from db
  //   const views = await getPageViews(slug);

  await wait(2000);

  return <div>Views: 100</div>;
};

export default PageViews;
