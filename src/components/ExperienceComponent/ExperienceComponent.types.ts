export interface IExperienceItem {
  mainHeading?: string;
  subHeading: string;
  period?: string;
  content: string[];
}

export const ExperienceData: IExperienceItem[] = [
  {
    mainHeading: "Software Engineer 2",
    subHeading: "Nielsen",
    period: "June 2024 - Present",
    content: [
      "Contributed to the Global Panelist Portal (GPP) team, enhancing the UI using React and TypeScript for a better user experience.",
      "Fixed production bugs, reducing the production ticket volume by 50% and improving system stability.",
      "Designed automation scripts using the Copado automation tool, enabling early issue detection before deployment to production.",
      "Led the migration of GPP from IFLv1 to IFLv2, leveraging React and TypeScript to enhance UI and introduce new features for improved functionality.",
      "Partnered with cross-functional teams to develop, and deploy frontend components, enhancing product integration capabilities.",
    ],
  },
  {
    mainHeading: "Software Engineer",
    subHeading: "MAQ Software",
    period: "Mar 2023 - May 2024",
    content: [
      "Engineered a strategic partnership with Microsoft's Business Value Management Team to launch and execute a React-based application, resulting in an uptick in productivity and efficiency for the Azure Sales Team at Microsoft.",
      "Transformed complex business strategies into a user-friendly interface, fostering deep understanding of value creation and strategic planning, resulting in a 40% increase in stakeholder engagement and a 25% improvement in strategic alignment. ",
      "Orchestrated the creation and seamless integration of an innovative Value Maps composer powered by React and Typescript, transforming the sales experience for Microsoft BVM Team, resulting in data-driven decision-making capabilities and enhanced client interactions.",
      "Took the lead in developing and seamlessly integrating diverse CRUD functionalities using JavaScript React, leading to a 25% boost in user retention and a remarkable 40% improvement in user satisfaction levels.",
      "Executed responsive design strategies to enhance functionality across various devices, thereby optimizing user experience. This led to a notable 25% increase in conversion rates and a significant 30% reduction in page load times.",
      "Led the implementation of a data-driven pricing analysis initiative, which optimized pricing structures through comprehensive market research and competitor analysis. This effort resulted in a 20% increase in profit margins and a 15% growth in overall revenue.",
    ],
  },
  {
    mainHeading: "Assistant Software Engineer",
    subHeading: "Tata Consultancy Services",
    period: "April 2022 - Mar 2023",
    content: [
      "Spearheaded development of web pages for the innovative Unified Catalog portal using React and JavaScript, unifying diverse data sources into a single, seamless platform.",
      "Orchestrated close partnership with senior developers to address team requirements, resulting in the implementation of effective UI-level code debugging tactics that optimized the user experience and decreased bug reports by 50%. ",
      "Enhanced user experience by implementing ReactJS expertise to design and optimize forms, aligning input parameters with project requirements, increased form completion rate by 25%.",
      "Championed the adoption of Jenkins and Bitbucket, implementing continuous integration and automated builds, streamlining deployment processes for increased efficiency.",
      "Developed a foundational understanding of REST API and Spring Boot, enhancing collaboration with backend teams and bolstering comprehension of the portal's comprehensive architecture.",
    ],
  },
  {
    mainHeading: "Assistant Software Engineer Trainee",
    subHeading: "Tata Consultancy Services",
    period: "April 2021 - Mar 2022",
    content: [
      "Engineered the Unified DevOps Portal, seamlessly integrating work tracking, interactive backlogs, and planning tools for enhanced team efficiency and collaboration.",
      "Orchestrated a versatile CI/CD pipeline across languages and cloud platforms, synchronized with GitHub and Git providers, enabling continuous deployment and autonomous operations.",
      "Demonstrated ReactJS prowess in designing dynamic forms, aligning input parameters with project prerequisites for optimal user experiences.",
      "Translated intricate client needs into meticulous UI designs, presenting feature demos for iterative refinement and improved user interaction.",
      "Integrated advanced UI components – React-Table, Graphs, Modals, Carousel Sliders – leveraging ReactJS, JavaScript, and React libraries for an engaging interface.",
    ],
  },
];
