const observer = (tl) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tl.play();
      } else {
        tl.reverse();
      }
    });
  });
};

const fadeInContent = {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  x: 10,
  y: 10,
};

// Intro fade in content

const introTl = gsap.timeline();

const introEl = document.querySelector(".intro");

const titleElIntro = document.querySelector(".intro__content h1");
const paragraphElIntro = titleElIntro.nextElementSibling;
const cardElIntro = paragraphElIntro.nextElementSibling;

const imageElIntro = document.querySelector(".toilet-kaart");

introTl
  .from(
    [titleElIntro, paragraphElIntro, cardElIntro],
    {
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      x: -10,
      y: 30,
    },
    "start"
  )
  .from(
    imageElIntro,
    {
      opacity: 0,
      duration: 3,
      x: 10,
      y: 30,
    },
    "start"
  );

// Categorieën fade in content

const categoriesTl = gsap.timeline({ paused: true });

const categoriesContentEl = document.querySelector(".categories__list");

categoriesTl.from(categoriesContentEl.children, fadeInContent);

observer(categoriesTl).observe(categoriesContentEl);

// Portfolio fade in content

const portfolioTl = gsap.timeline({ paused: true });

const portfolioContentEl = document.querySelector(".portfolio__content");

portfolioTl.from(portfolioContentEl.children, {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  x: 10,
  y: 10,
});

observer(portfolioTl).observe(portfolioContentEl);
