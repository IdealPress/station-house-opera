import { SliceZone } from "@prismicio/react";
import Image from "next/image";

import { BaseLayout, SubNavigation } from "components";

export default function Project() {
  return (
    <>
      <SubNavigation
        left={<p>Project Title</p>}
        right={
          <ul>
            <li>Information</li>
          </ul>
        }
      />
      <main className="space-y-12 px-6">
        {/* <SliceZone
          // slices={content?.data.slices}
          // components={components}
          // context={{
          //   primary: primary,
          //   secondary: secondary,
          //   highlight: highlight,
          // }}
        /> */}
      </main>
    </>
  );
}

Project.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
