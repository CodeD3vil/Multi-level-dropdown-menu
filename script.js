const mobileButtonToggle = document.querySelector(".mobile-toggle");
const navigation = document.querySelector(".menu");
const sections = document.querySelectorAll(".section");
const navigationLinks = document.querySelectorAll(".header-nav-links");

mobileButtonToggle.addEventListener("click", () => {
    const visibilty = navigation.getAttribute("data-visible");
    visibilty === "false"
        ? navigation.setAttribute("data-visible", "true")
        : navigation.setAttribute("data-visible", "false");
});

//slide mobile navigation away
const mobileNavigationOff = function () {
    const visibilty = navigation.getAttribute("data-visible");
    visibilty === "true"
        ? navigation.setAttribute("data-visible", "false")
        : null;
};

//slide mobile navigation away when clicked on webpage section(outside the navigation, not including the header)
//slide mobile navigation away after clicking on nvigation links
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("touchend", mobileNavigationOff);
    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener("touchstart", mobileNavigationOff);
    }
}
