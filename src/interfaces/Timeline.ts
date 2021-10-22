/**
 * REPRESENTATIVE INTERFACES
 */
export type IAssociation = {
  id: number;
  color: string;
  start: Date;
  end: Date;
};

export type IUser = {
  id: number;
  name: string;
  color: string;
  associations: IAssociation[];
  projects?: IProject[];
};

export type IProject = {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  users: IUser[];
};

/**
 * TIMELINE INTERFACES
 */
export type ITimelineRow = {
  id: number;
  name: string;
  type: 'project' | 'user' | 'header';
  color?: string;
  startDate?: Date;
  endDate?: Date;
  bars: IAssociation[];
};

export interface ITimelineData {
  PROJECTS_TO_USERS: ITimelineRow[];
  USERS_TO_PROJECTS: IUser[];
}
