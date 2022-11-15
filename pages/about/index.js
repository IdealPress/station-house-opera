import Link from "next/link";
import { SliceZone } from "@prismicio/react";

import { createClient } from "prismicio";
import { components } from "slices";

import { BaseLayout, SubNavigation } from "components";

const hrefResolver = (uid) => {
  return uid === "about" ? "/about" : `/about/${uid}`;
};

export default function About({ content, pages }) {
  return (
    <>
      <SubNavigation
        right={
          <ul>
            {pages.map((page, index) => (
              <Link key={index} href={hrefResolver(page.uid)}>
                <a>
                  <li>{page?.data?.title}</li>
                </a>
              </Link>
            ))}
          </ul>
        }
      />
      <main className="space-y-12">
        <SliceZone slices={content?.data.slices} components={components} />
      </main>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getByUID("info", "about");
  const pages = await client.getByType("info", {
    orderings: {
      field: 'my.info.uid',
      direction: 'asc',
    }
  })
  return {
    props: { content, pages: pages.results },
  };
}
