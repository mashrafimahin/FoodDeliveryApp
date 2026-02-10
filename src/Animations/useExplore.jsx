import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function useExplore(targets, scope) {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top 70%",
        },
      });

      tl.from(targets.one, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      }).from(
        targets.two,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2",
      );
    },
    { scope },
  );
}

export default useExplore;
