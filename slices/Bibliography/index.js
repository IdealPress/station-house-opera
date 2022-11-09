import React from "react";
import Link from "next/link";

var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const Bibliography = ({ slice }) => (
  <section className="grid md:grid-cols-2 gap-12 p-6 lg:px-12">
    {slice.items?.map((item, index) => (
      <Link key={index} href={item.link.url}>
        <a className="block space-y-3">
          <p className="text-2xl">{item.title}</p>
          <p>{item.source}</p>
          <p>{new Date(item.date).toLocaleDateString("en-GB", options)}</p>
        </a>
      </Link>
    ))}
  </section>
);

export default Bibliography;
