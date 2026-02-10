import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useXPart(scope) {
  useGSAP(
    () => {
      gsap.from(scope.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: scope.current,
          start: "top 70%",
        },
      });
    },
    { scope },
  );
}

export default useXPart;
