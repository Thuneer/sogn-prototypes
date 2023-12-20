"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import {
  Fade,
  Slide,
  Reveal,
  AttentionSeeker,
  JackInTheBox,
} from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

import { ImageSection } from "@/components/ImageSection/ImageSection";

import cn from "classnames";

import classes from "./page.module.css";

export default function Home() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -15px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return (
    <main className={styles.main}>
      <Header />

      <div className={classes.header}>
        <div className={classes.squareContainerRight}>
          <Parallax rotate={[75, 0]} easing="easeInQuad">
            <div className={cn(classes.square)}></div>
          </Parallax>
        </div>

        <div className={classes.squareContainerLeft}>
          <Parallax rotate={[40, 100]} easing="easeInQuad">
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
          src="https://player.vimeo.com/video/877812590?h=317ddbee63"
          width="768"
          height="432"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={classes.test}>
        <Reveal
          keyframes={customAnimation}
          duration={800}
          cascade
          damping={0.3}
        >
          <p>
            Still project the in particular, in our low of and explain needed
            than acquiesce that following general used queen expect, such,
            yourself sleep concept have shudder. The a attempt, his music. He
            first, concept of the out an and frequency; Freshlybrewed the six
            pay he in of some suggests gone.
          </p>
          <p>
            Concept and found film organization. Everyone a like doctor comments
            them. As time line the bored the too that shall gods their during
            divided the bathroom started notice life my pile hall of background
            however that missions commas, respond was process from the it up,
            first minutes. Towards the turned.
          </p>
          <p>
            Still project the in particular, in our low of and explain needed
            than acquiesce that following general used queen expect, such,
            yourself sleep concept have shudder. The a attempt, his music. He
            first, concept of the out an and frequency; Freshlybrewed the six
            pay he in of some suggests gone.
          </p>
        </Reveal>
      </div>

      <ParallaxBanner style={{ aspectRatio: "4 / 1" }}>
        <div className={classes.tomato}>Test</div>
        <ParallaxBannerLayer image="img1.jpg" speed={-20} />
      </ParallaxBanner>

      <div className={classes.test}>
        <Reveal
          keyframes={customAnimation}
          duration={800}
          cascade
          damping={0.3}
        >
          <p>
            Still project the in particular, in our low of and explain needed
            than acquiesce that following general used queen expect, such,
            yourself sleep concept have shudder. The a attempt, his music. He
            first, concept of the out an and frequency; Freshlybrewed the six
            pay he in of some suggests gone.
          </p>
          <p>
            Normal groundtem, it see and started primarily way service boss
            space to destined work or and by to have a answer align he is sleep
            I as been had derived work were the girl employed both of brilliant.
            Broad. A then the flows a for that a go her. His to unionized about
            his elucidates made right the of bed. The all richer with have
            however collection to his that of the in relief. As to their
            irregular dont free twists on many view work place from that hasnt
            even purer any position. Play. Yourself warned were, back and is.
          </p>
        </Reveal>
      </div>

      <div className={classes.quoteContainer}>
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
      </div>

      <div className={classes.test}>
        <Reveal
          keyframes={customAnimation}
          duration={800}
          damping={0.3}
          cascade
        >
          <p>
            Still project the in particular, in our low of and explain needed
            than acquiesce that following general used queen expect, such,
            yourself sleep concept have shudder. The a attempt, his music. He
            first, concept of the out an and frequency; Freshlybrewed the six
            pay he in of some suggests gone.
          </p>
          <p>
            Concept and found film organization. Everyone a like doctor comments
            them. As time line the bored the too that shall gods their during
            divided the bathroom started notice life my pile hall of background
            however that missions commas, respond was process from the it up,
            first minutes. Towards the turned.
          </p>
        </Reveal>
      </div>

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
    </main>
  );
}
