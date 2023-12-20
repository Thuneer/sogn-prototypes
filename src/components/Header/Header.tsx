import React from "react";
import { Container } from "react-bootstrap";

import { MenuHamburgerIcon, MagnifyingGlassIcon } from "@navikt/aksel-icons";
import Link from "next/link";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <Link href="/">
            <img src="logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className={classes.right}>
          <div>
            <MagnifyingGlassIcon title="a11y-title" fontSize="1.8rem" /> Søk
          </div>
          <div>
            <MenuHamburgerIcon title="a11y-title" fontSize="1.8rem" /> Meny
          </div>
        </div>
      </Container>
    </header>
  );
};
