document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

   

    // let sections = gsap.utils.toArray(".Process");

    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: ".Methodology__Main__Container",
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: 1,
    //         snap: 1 / (sections.length - 1),
    //         markers: true,
    //         start: () => `top 11%`,
    //         end: () => "+=" + document.querySelector(".Methodology__Content__Container").offsetWidth,
    //     }
    // })


    const listItems = document.querySelectorAll('.Bullet__point');
    const listItemsdots = document.querySelectorAll('.Bullet__Dot');
    function colorItems() {
        let index = 0;
        let dotIdx = 0;
        return function() {
        // Remove the color from all items
        listItems.forEach(item => item.classList.remove('Bullet_Point_Active'));
        listItemsdots.forEach(item => item.classList.remove('Bullet__Dot__Active'));
        
        // Color the current item
        listItems[index].classList.add('Bullet_Point_Active');
        listItemsdots[dotIdx].classList.add('Bullet__Dot__Active');
        
        // Move to the next item
        dotIdx = (dotIdx + 1) % listItemsdots.length;
        index = (index + 1) % listItems.length;
        };
    }

    setInterval(colorItems(), 1000); 
})