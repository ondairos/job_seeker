export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: Degree;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  spotlights: Spotlight[];
  selectedOrgs: string[];
  selectedJobTypes: string[];
  selectedDegrees: Degree[];
  degrees: Degree[];
}

export interface Degree {
  id: number;
  degree: string;
}
