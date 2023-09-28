window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  requestUserRepos()
    .then((response) => response.json())
    .then((data) => {
      let ul = document.getElementById("github_name");

      let li = document.createElement("h1");
      li.innerHTML = `
      <h1 class="masthead-heading text-uppercase mb-0">${data.name}</h1>`;
      // Append each li to the ul
      ul.appendChild(li);
    });
});

function requestUserRepos() {
  // create a variable to hold the `Promise` returned from `fetch`
  return Promise.resolve(fetch(`https://api.github.com/user/124145401`));
}
