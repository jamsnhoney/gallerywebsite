/**
 * Case study list and metadata (title, image, role, team, skills, timeline).
 * - Edit this file to change slugs, titles, gallery labels, images, and meta.
 * - Page body content (overview, problem statement, etc.) is in:
 *   src/content/caseStudies/CaseStudy1.js … CaseStudy4.js
 */
import CaseStudy1Content from "../content/caseStudies/CaseStudy1";
import CaseStudy2Content from "../content/caseStudies/CaseStudy2";
import CaseStudy3Content from "../content/caseStudies/CaseStudy3";
import CaseStudy4Content from "../content/caseStudies/CaseStudy4";

const wingmateImg = "/wingmate.png";
const careerxlImg = "/careerxl.png";
const letGetMovingImg = "/LGM.png";
const myFavouriteProductivityAppImg = "/prod-app.png";


const defaultMeta = {
  role: ["—"],
  team: ["—"],
  skills: ["—"],
  timeline: ["—"],
};

export const caseStudiesData = [
  {
    /* wingmate */
    slug: "case-study-1", 
    title: "wingmate",
    galleryTitle: "wingmate | the fresh into the world dating app",
    imageSrc: wingmateImg,
    role: ["team lead &", "product designer"],
    team: ["elliott vince", "teagan wright", "& myself"],
    skills: ["illustration", "user research", "ui/ux design", "product design"],
    timeline: ["jan - march 2026"],
    content: CaseStudy1Content,
  },
  {
    /* careerxl */
    slug: "case-study-2",
    title: "careerxl",
    galleryTitle: "new website new brand | website audit for careerxl",
    imageSrc: careerxlImg,
    ...defaultMeta,
    content: CaseStudy2Content,
  },
  {
    /* let's get moving */
    slug: "case-study-3",
    title: "let's get moving",
    galleryTitle: "let's get moving | graphic and website design",
    imageSrc: letGetMovingImg,
    ...defaultMeta,
    content: CaseStudy3Content,
  },
  {
    /* peak productivity */
    slug: "case-study-4",
    title: "peak productivity",
    galleryTitle: "my favourite productivity app | ux research",
    imageSrc: myFavouriteProductivityAppImg,
    ...defaultMeta,
    content: CaseStudy4Content,
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudiesData.find((c) => c.slug === slug) || null;
}
