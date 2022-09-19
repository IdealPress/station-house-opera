import { BaseLayout, SubNavigation } from "components";
import Link from "next/link";

const pages = [
  { title: "The Company", href: "/" },
  { title: "History", href: "/" },
  { title: "Workshops", href: "/" },
  { title: "Archive", href: "/" },
  { title: "Suppory & Contact", href: "/" },
];

export default function About() {
  return (
    <>
      <SubNavigation
        right={
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <Link href={page.href}>
                  <a>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        }
      />
      <main className="space-y-12">
        <section className="px-6">
          <p className="text-4xl w-4/5">
            With past projects ranging from spectacular site-specific works
            created with 10,000 concrete blocks, to simultaneous performances
            across continents using live internet streaming, Station House Opera
            is an internationally renowned performance company with a unique
            physical and visual style.{" "}
          </p>
        </section>
        <section className="px-6">
          <div className="prose prose-lg mx-auto">
            <p>
              With past projects ranging from spectacular site-specific works
              created with 10,000 concrete blocks, to simultaneous performances
              across continents using live internet streaming, Station House
              Opera is an internationally renowned performance company with a
              unique physical and visual style. Founded in 1980 it has produced
              over 30 productions of widely varying scale and focus, but all
              rooted in an interest to make work that brings together theatre
              and the visual arts in a single unified vision. The company has
              created projects in a variety of locations all over the world,
              from New York’s Brooklyn Bridge Anchorage to Dresden’s historic
              Frauenkirche and Salisbury Cathedral, and has toured the world,
              from Azerbaijan to Kosovo, China to Brazil.
            </p>
            <p>
              The company is led by artistic director and co-founder Julian
              Maynard Smith and has worked with over 100 performers in various
              projects, revolving around a core group including at various times
              Miranda Payne, David Goulding, Alison Urquhart, Jo Miles, Pascal
              Brannan, Bruce Gilchrist, Susannah Hart, Helen Morse Palmer, Yoko
              Ishiguro and Taghrid Choucair-Vizoso.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
