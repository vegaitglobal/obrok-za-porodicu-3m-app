export interface AppliedVolunteerAction {
  [key: string]: {name: string; color: string};
}

export interface FilterVolunteerActionsType {
  ids: string[];
  searchTerm: string;
}
