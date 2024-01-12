import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Header.module.css";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@navikt/aksel-icons";

export const Header = () => {
  return (
    <header>
      <Container className={classes.container}>
        <div className={classes.left}>
          <img src="logo.svg" alt="" height={28} />
        </div>
        <div className={classes.right}>
          <div className={classes.search}>
            <input type="text" placeholder="Søk her..." />
            <MagnifyingGlassIcon fontSize={24} />
          </div>
        </div>
      </Container>
      <div className={classes.second}>
        <Container>
          <div className={classes.menu}>
            <div className={classes.item}>
              Temaer <ChevronDownIcon fontSize={22} />
            </div>
            <div className={classes.item}>Veiledning</div>
            <div className={classes.item}>Rapporter</div>
            <div className={classes.item}>Kontakt oss</div>
            <div className={classes.item}>Om Digdir</div>
          </div>
        </Container>
      </div>
      <div className={classes.dropdown}>
        <Container>
          <Row>
            <Col>
              <div className={classes.underMenu}>
                <div>Informasjonssikkerhet</div>
                <ul>
                  <li>Dette er eit undernivå</li>
                  <li>Dette er eit undernivå</li>
                  <li>Dette er eit undernivå</li>
                  <li>Dette er eit undernivå</li>
                  <li>Dette er eit undernivå</li>
                </ul>
              </div>
            </Col>
            <Col>d</Col>
            <Col>d</Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
