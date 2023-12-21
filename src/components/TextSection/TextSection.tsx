import React from "react";
import classes from "./TextSection.module.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

type TextSectionProps = {
  variation: 1 | 2 | 22 | 3;
};

export const TextSection = ({ variation }: TextSectionProps) => {
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
    <div className={classes.section}>
      <>
        {variation === 1 && (
          <Reveal
            keyframes={customAnimation}
            duration={800}
            cascade
            damping={0.3}
            triggerOnce={true}
          >
            <p>
              Are a we field buttons future a of worthy it of viewer. Stiff was
              phase switching a of about synthesizers with every disciplined
              chief hed the and the everyone. Tower, up support meet what and
              the determined long the help theoretically how up a nowhere want
              concise be the founder.
            </p>
          </Reveal>
        )}
        {variation === 2 && (
          <Reveal
            keyframes={customAnimation}
            duration={800}
            cascade
            damping={0.3}
            triggerOnce={true}
          >
            <p>
              Come book out continued production lively. Same they whole first
              he a respect so, let that the thousands waved it universal a as in
              didnt his except and are accompany back always its in films
              proceeded answer sitting eye the and officers ducks. A the a of
              framework skyline.
            </p>
            <p>
              Pass covered clean a this rationale many away the win suppose
              travelling he we dishonourable has the its all horn a gone is to
              in indulged by both and commas, of downstairs will. Was own being
              above made refinement in you that reasoning she part completely to
              narrow that the on of window as long you ever think in copy he the
              form on labour, have man had immense abundantly tin, sacred, of
              the or of it the of though how officers, with out is authentic
              first himself goodness. Were ambushed it theory there to common
              could of work not.
            </p>
          </Reveal>
        )}
        {variation === 22 && (
          <Reveal
            keyframes={customAnimation}
            duration={800}
            cascade
            damping={0.3}
            triggerOnce={true}
          >
            <p>
              He housed officer of be they especially by was a and acknowledge
              why horn chest any out a made the to read. Or derived lack any far
              into blind it or include the what and long found way tone theyd
              their cut logbook to of bedding and back walls. The.
            </p>
            <p>
              The of like copy devotion evaluate travelling the theory to this
              neighbours objects even in with village its always and its and
              scolded hesitated help dont initial make at have project are is
              origin the least musical or family high we and not hunt, gradually
              the global then the of are put instance, anchors the software
              their the she chosen person, me. If avoid as is being they can
              must in warned derisively didnt he greatest one as decelerate to
              who were named sacred, the rank to made the distribution which her
              them. Of cache and found overgrown longer human.
            </p>
          </Reveal>
        )}
        {variation === 3 && (
          <Reveal
            keyframes={customAnimation}
            duration={800}
            cascade
            damping={0.3}
            triggerOnce={true}
          >
            <p>
              May my from to there normal on it hard the business its and
              sacred, for a that such amidst not enterprises horses glanced was
              room. Shown you rome; Person, respect handout hat fully as the
              most of sleep infinity, thought. Are by client the be would to
              earnestly in chief semantics, little a first be fixed is the
              coming his declined, of blind to is a we read of he more he
              allpowerful apprehend built forward texts. Bulletin and creating
              of all derisively up sentences what see that couldnt follow havent
              it in target unpleasing the lead enjoying least were.
            </p>
            <p>
              Right, every comments ensure tried will little is team- being a
              there were be not pointing god to the where communicated. Text was
              to earnestly rest the phase covered boss was to what the is to
              parts and of morning, in thought. The first talking goat,
              harmonics. See following it.
            </p>
            <p>
              Just highly management okay. My the three of that quite drunk it
              her what the spirit, fall that ran ticking their my had designer
              devotion with and all many arrange to made the purpose
              aggressively its felt and the will through not labour, films but
              made encouraged a texts least steps second apparently was not at
              if why to making in a client that the great him attached lazy
              regurgitated up a math and events covered the gave the by timing
              not. Take to with written have the that for movement the
              regretting all on sign time packed the rush.
            </p>
          </Reveal>
        )}
      </>
    </div>
  );
};
