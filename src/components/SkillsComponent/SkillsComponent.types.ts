export interface ISkillsItem {
  subHeading: string;
  content: string[];
}

export const SkillsData: ISkillsItem[] = [
  {
    subHeading: "Frontend",
    content: ["React.js", "JSX", "JavaScript", "TypeScript", "Redux", "HTML"],
  },
  {
    subHeading: "Styling",
    content: [
      "Fluent UI",
      "CSS3",
      "Material UI",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    subHeading: "Tools",
    content: ["VS Code", "Postman", "Copado Automation Tool"],
  },
  {
    subHeading: "Version Control",
    content: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    subHeading: "Others",
    content: [
      "Software Development",
      "Code Reviews",
      "Bug Fixing",
      "Jira",
      "Azure DevOps",
      "Jest",
    ],
  },
];
