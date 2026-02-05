import wingmateImg from "../assets/wingmate.png";

const defaultMeta = {
  role: ["—"],
  team: ["—"],
  skills: ["—"],
  timeline: ["—"],
};

export const caseStudiesData = [
  {
    slug: "wingmate",
    title: "wingmate",
    galleryTitle: "wingmate | the fresh into the world dating app",
    imageSrc: wingmateImg,
    role: ["team lead &", "product designer"],
    team: ["elliott vince", "teagan wright", "& myself"],
    skills: ["illustration", "user research", "ui/ux design", "product design"],
    timeline: ["jan - march 2026"],
  },
  {
    slug: "careerxl-website-audit",
    title: "New website new brand",
    galleryTitle: "new website new brand | website audit for careerxl",
    imageSrc: wingmateImg,
    ...defaultMeta,
  },
  {
    slug: "lets-get-moving",
    title: "Let's get moving",
    galleryTitle: "let's get f***king moving | graphic and website design",
    imageSrc: wingmateImg,
    ...defaultMeta,
  },
  {
    slug: "productivity-app",
    title: "My favourite productivity app",
    galleryTitle: "my favourite productivity app | ux research is easy when i am the only user",
    imageSrc: wingmateImg,
    ...defaultMeta,
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
