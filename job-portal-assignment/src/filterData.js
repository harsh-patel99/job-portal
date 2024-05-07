import { uniqBy } from "lodash";

export const FilterOptions = (currentJobs, type) => {
  return currentJobs?.length
    ? uniqBy(currentJobs?.map((job) => ({ label: job[type], value: job[type] })),'label')
    : [];
};
