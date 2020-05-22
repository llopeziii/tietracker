// Denormalization
export interface ProjectClientData {
  id: string;
  name: string;
  color: string;
}

export interface ProjectDataRate {
  hourly: number;
  vat: boolean;
}

export interface ProjectData {
  name: string;

  disabled: boolean;

  rate: ProjectDataRate;

  client?: ProjectClientData;

  created_at?: Date | number;
  updated_at?: Date | number;
}

export interface Project {
  id: string;
  data: ProjectData;
}
