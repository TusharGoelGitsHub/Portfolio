import { IExperienceItem } from "../ExperienceComponent/ExperienceComponent.types";

export interface ICustomCardProps {
  data: IExperienceItem;
  height?: number;
  isSkills?: boolean;
}
