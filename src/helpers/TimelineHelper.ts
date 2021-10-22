import { IProject, ITimelineRow } from '@interfaces/Timeline';

class TimelineHelper {
  public getProjectsToUsers(projects: IProject[]): ITimelineRow[] {
    const transformedData: ITimelineRow[] = [];

    projects.forEach(project => {
      const { id, name, startDate, endDate } = project;

      transformedData.push({
        id,
        name,
        type: 'project',
        startDate,
        endDate,
        bars: [],
      });

      project.users.forEach(user => {
        transformedData.push({
          id: user.id,
          name: user.name,
          type: 'user',
          color: user.color,
          bars: user.associations,
        });
      });
    });

    return transformedData;
  }

  // public getUsersToProjects() {}
}

const INSTANCE = new TimelineHelper();

export { INSTANCE as TimelineHelper };
