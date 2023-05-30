export const getStatePortion = (state, levelOne, name) => state[levelOne][name];

export const getStateWithOnlyOneLevel = (state, levelOne) => state[levelOne];
