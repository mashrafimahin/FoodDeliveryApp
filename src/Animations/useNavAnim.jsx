import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function useNavAnim(scope) {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".logo", {
        x: -30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".links",
          {
            y: -30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
          },
          "-=0.6",
        )
        .from(
          ".ctaS",
          {
            y: -30,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.7",
        );
    },
    { scope },
  );
}

export default useNavAnim;
