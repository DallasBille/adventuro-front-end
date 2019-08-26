export const loadAdventuresAction = adventures => ({
  type: "LOAD_ADVENTURES",
  payload: adventures
});

export const loadAdventureAction = adventure => ({
  type: "LOAD_ADVENTURE",
  payload: adventure
});

export const createAdventureAction = adventure => ({
  type: "CREATE_ADVENTURE",
  payload: adventure
});

export const updateAdventureAction = adventure => ({
  type: "UPDATE_ADVENTURE",
  payload: adventure
});

export const setAdventureErrorsAction = errors => ({
  type: "SET_ADVENTURE_ERRORS",
  payload: errors
});

export const setFilterAction = term => ({
  type: "SET_FILTER_TERM",
  payload: term
});
