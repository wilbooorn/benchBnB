export const selectAllBenches = state => {
  return Object.keys(state.benches).map(benchId => state.benches[benchId]);
};
