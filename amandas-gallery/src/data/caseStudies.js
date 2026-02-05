import wingmateImg from "../assets/wingmate.png";

export const caseStudiesData = [
  {
    slug: "wingmate",
    title: "wingmate",
    galleryTitle: "wingmate | the fresh into the world dating app",
    imageSrc: wingmateImg,
    caption: "A fresh take on dating app design for people who want real connections.",
  },


  {
    slug: "careerxl-website-audit",
    title: "New website new brand",
    galleryTitle: "new website new brand | website audit for careerxl",
    imageSrc: wingmateImg,
    caption: "Website audit and strategy for CareerXL.",
  },


  {
    slug: "lets-get-moving",
    title: "Let's get moving",
    galleryTitle: "let's get f***king moving | graphic and website design",
    imageSrc: wingmateImg,
    caption: "Graphic and website design to get people moving.",
  },


  
  {
    slug: "productivity-app",
    title: "My favourite productivity app",
    galleryTitle: "my favourite productivity app | ux research is easy when i am the only user",
    imageSrc: wingmateImg,
    caption: "UX research and design when you're your own user.",
  },
];

export const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "problem-statement", label: "Problem Statement" },
  { id: "user-research", label: "User Research" },
  { id: "market-research", label: "Market Research" },
  { id: "design-process", label: "The Design Process" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflections", label: "Reflections" },
];

export function getCaseStudyBySlug(slug) {
  return caseStudiesData.find((c) => c.slug === slug) || null;
}
