

import { types } from 'mobx-state-tree';

const location = name =>
  types.maybe(
    types.model(name, {
      latitude: types.number,
      longitude: types.number,
      name: types.maybe(types.string)
    })
  );

const current = location('CurrentStore');
const gps = location('ApiStore');

export const LocationStore = types
  .model('LocationStore', {
    current,
    gps
  })
  .actions(self => ({
    setCurrent (newCurrent) {
      self.current = newCurrent;
    },
    setGps (newGps) {
      self.gps = newGps;
    }
  }));
