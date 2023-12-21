"use client";

import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { TextSection } from "@/components/TextSection/TextSection";

import { ImageSection } from "@/components/ImageSection/ImageSection";

import cn from "classnames";

import classes from "./page.module.css";

export default function Home() {
  const customAnimation2 = keyframes`
from {
  opacity: 0;
  transform: translateX(-100px) rotate(-45deg);
}

to {
  opacity: 1;
  transform: translateX(70px) rotate(0);
}
`;

  return (
    <main className={styles.main}>
      <Header />

      <div className={classes.header}>
        <div className={classes.squareContainerRight}>
          <Parallax rotate={[75, 0]} translateY={[-25, 50]} easing="easeInQuad">
            <div className={cn(classes.square)}></div>
          </Parallax>
        </div>

        <div className={classes.squareContainerLeft}>
          <Parallax
            rotate={[40, 100]}
            translateY={[-25, 50]}
            easing="easeInQuad"
          >
            <div className={cn(classes.square, classes.square2)}></div>
          </Parallax>
        </div>

        <div className={classes.headerContainer}>
          <h1 className={classes.title}>The Norwegian Digital Journey</h1>
          <p className={classes.desc}>
            Offentlig sektor skal bli verdensledende på digitalisering – og
            Digitaliseringsdirektoratet (Digdir) skal være regjeringens fremste
            verktøy for raskere og mer samordnet digitalisering av samfunnet.
          </p>
        </div>
      </div>
      <div className={classes.video}>
        <iframe
          src="https://player.vimeo.com/video/27246366?h=75fabdf419&color=ffffff"
          width="768"
          height="432"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <TextSection variation={2} />

      <ParallaxBanner
        style={{
          aspectRatio: "3 / 1",
          borderBottom: "1px solid #c4c4c4",
          borderTop: "1px solid #c4c4c4",
        }}
        layers={[
          { image: "img/buildings1.jpg", speed: -20 },
          {
            speed: -40,
            children: (
              <div className={classes.tomato}>
                <div className={classes.tomato2}>
                  <p>
                    Still project the in particular, in our low of and explain
                    needed than acquiesce that following general used queen
                    expect, such, yourself sleep concept have shudder. The a
                    attempt, his music. He first, concept of the out an and
                    frequency; Freshlybrewed the six pay he in of some suggests
                    gone.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      ></ParallaxBanner>

      <TextSection variation={22} />

      <div className={classes.quoteContainer}>
        <Fade triggerOnce={true}>
          <div className={classes.quote}>
            <img src="quote.svg" alt="" />
            <p className={classes.quoteText}>
              Still project the in particular, in our low of and explain needed
              than acquiesce that following general used queen expect, such,
              yourself sleep concept have shudder. The a attempt, his music. He
              first, concept of the out an and frequency; Freshlybrewed the six
              pay he in of some suggests gone.
            </p>
            <p className={classes.quoteAuthor}>- John Doe</p>
          </div>
        </Fade>
      </div>

      <div className={classes.potato1}>
        <Reveal keyframes={customAnimation2} duration={1000} triggerOnce={true}>
          <img src="img/elements/element1blue.svg" alt="Img" />
        </Reveal>
      </div>

      <TextSection variation={3} />

      <ImageSection
        title="Carpeting switching is a look of will. Well is support"
        desc="That be looked seven joke. Why hesitated everyday. And food, then as overgrown do enjoying being elucidates his subdued the rhetoric don't one the purer a them. Attention but myself the many, of he with discipline avoid their economics, are a of convince stupid not there's were most starting go."
        image="nature1.jpg"
        tagColor="blue"
      />

      <ImageSection
        title="Carpeting switching is a look of will. Well is support"
        desc="That be looked seven joke. Why hesitated everyday. And food, then as overgrown do enjoying being elucidates his subdued the rhetoric don't one the purer a them. Attention but myself the many, of he with discipline avoid their economics, are a of convince stupid not there's were most starting go."
        image="nature2.jpg"
        imgDir="right"
        tagColor="red"
      />

      <ImageSection
        title="Carpeting switching is a look of will. Well is support"
        desc="That be looked seven joke. Why hesitated everyday. And food, then as overgrown do enjoying being elucidates his subdued the rhetoric don't one the purer a them. Attention but myself the many, of he with discipline avoid their economics, are a of convince stupid not there's were most starting go."
        image="nature3.jpg"
        tagColor="yellow"
      />

      <ImageSection
        title="Carpeting switching is a look of will. Well is support"
        desc="That be looked seven joke. Why hesitated everyday. And food, then as overgrown do enjoying being elucidates his subdued the rhetoric don't one the purer a them. Attention but myself the many, of he with discipline avoid their economics, are a of convince stupid not there's were most starting go."
        image="nature4.jpg"
        imgDir="right"
        tagColor="blue"
      />

      <TextSection variation={2} />
    </main>
  );
}
