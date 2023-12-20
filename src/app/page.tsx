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
import Link from "next/link";

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
      <h2>Showroom alternativer</h2>
      <Link href="showroom1">Showroom alternativ 1</Link>
    </main>
  );
}
