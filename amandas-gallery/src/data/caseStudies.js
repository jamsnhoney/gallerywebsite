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

const defaultMeta = {
  role: ["—"],
  team: ["—"],
  skills: ["—"],
  timeline: ["—"],
};

export const caseStudiesData = [
  {
    slug: "case-study-1",
    title: "Case Study 1",
    galleryTitle: "wingmate | the fresh into the world dating app",
    imageSrc: wingmateImg,
    role: ["team lead &", "product designer"],
    team: ["elliott vince", "teagan wright", "& myself"],
    skills: ["illustration", "user research", "ui/ux design", "product design"],
    timeline: ["jan - march 2026"],
    content: CaseStudy1Content,
  },
  {
    slug: "case-study-2",
    title: "Case Study 2",
    galleryTitle: "new website new brand | website audit for careerxl",
    imageSrc: careerxlImg,
    ...defaultMeta,
    content: CaseStudy2Content,
  },
  {
    slug: "case-study-3",
    title: "Case Study 3",
    galleryTitle: "let's get moving | graphic and website design",
    imageSrc: wingmateImg,
    ...defaultMeta,
    content: CaseStudy3Content,
  },
  {
    slug: "case-study-4",
    title: "Case Study 4",
    galleryTitle: "my favourite productivity app | ux research",
    imageSrc: wingmateImg,
    ...defaultMeta,
    content: CaseStudy4Content,
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudiesData.find((c) => c.slug === slug) || null;
}
