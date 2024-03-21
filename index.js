document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

   

    let sections = gsap.utils.toArray(".Process");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".Methodology__Main__Container",
            pin: true,
            pinSpacing: false,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            markers: true,
            start: () => `top 11%`,
            end: () => "+=" + document.querySelector(".Methodology__Content__Container").offsetWidth,
        }
    })
})