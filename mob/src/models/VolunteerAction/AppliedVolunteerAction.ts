export interface AppliedVolunteerAction {
  [key: string]: {name: string; color: string};
}

export interface FilterVolunteerActionsType {
  actionTypeIds?: number[];
  actionStatusesIds?: number[];
  searchTerm?: string;
}
