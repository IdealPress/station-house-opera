import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { useScrollDirection } from "lib/hooks";

import { SVGLogo } from "components";

import styles from "./Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const scrollDirection = useScrollDirection();
  const [showNavigation, setShowNavigation] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setShowNavigation(scrollDirection !== "down");
  }, [scrollDirection]);


  return (
    <div className={styles.base}>
      {!showNavigation && (
        <div
          className={"fixed top-0 left-0 w-screen h-32"}
          onMouseOver={() => setShowNavigation(true)}
        />
      )}
      <AnimatePresence initial={false}>
        {showNavigation && (
          <motion.nav
            className={styles.nav}
            initial={{ y: "-200px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-200px", opacity: 0 }}
            transition={{ type: "tween" }}
          >
            <Link href="/">
              <a>
                <SVGLogo className="w-full max-w-lg sm:w-96 md:w-[450px]" />
              </a>
            </Link>
            <ul className={styles.list}>
              <li className={router.pathname.includes("project") && "active-link"}>
                <Link href="/projects">
                  <a>
                    Projects
                  </a>
                </Link>
              </li>
              <li className={router.pathname.includes("about") && "active-link"}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
