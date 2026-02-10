// hooks
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// main
const useHeroAnim = (targets, scope) => {
  useGSAP(
    () => {
      // timeline
      const tl = gsap.timeline();

      // anim
      tl.from(targets.one, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.2,
          ease: "back.out",
        },
      })
        .from(
          targets.two,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "bounce.out",
          },
          "-=0.3",
        )
        .from(
          targets.three,
          {
            x: 40,
            opacity: 0,
            scale: 0.9,
            rotate: 20,
            duration: 1,
            ease: "back.out",
          },
          "-=0.9",
        );
    },
    { scope },
  );
};

export default useHeroAnim;
