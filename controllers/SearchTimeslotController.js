import SearchTimeslot from '../models/SearchTimeslot.js';

export const getSearchTimeslots = async (_req, res) => {
  const list = await SearchTimeslot.find();
  res.json(list);
};
