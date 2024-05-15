import { constants } from "../Constants";

export interface ICarouselProps {
  heading: string;
  description: string;
}

export const ICarouselData: ICarouselProps[] = [
  {
    heading: constants.websiteReviews,
    description: constants.websiteReviewsDesc,
  },
  {
    heading: constants.businessStrategy,
    description: constants.businessStrategyDesc,
  },
  {
    heading: constants.userExperienceDesign,
    description: constants.userExperienceDesignDesc,
  },
  {
    heading: constants.tailoredDevelopment,
    description: constants.tailoredDevelopmentDesc,
  },
  {
    heading: constants.rigorousTesting,
    description: constants.rigorousTestingDesc,
  },
  {
    heading: constants.ongoingSupport,
    description: constants.ongoingSupportDesc,
  },
];
