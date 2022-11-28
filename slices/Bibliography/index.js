import React from "react";
import Link from "next/link";

var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const Bibliography = ({ slice }) => (
  <section className="px-6 space-y-8 lg:px-12 prose prose-lg mx-auto leading-snug">
    {slice.items?.map((item, index) => (
      <Link key={index} href={item.link.url}>
        <a className="block space-y-2 not-prose">
          <p className="text-2xl">{item.title}</p>
          <p className="text-base">{item.source}</p>
          <p className="text-base">{new Date(item.date).toLocaleDateString("en-GB", options)}</p>
        </a>
      </Link>
    ))}
  </section>
);

export default Bibliography;
