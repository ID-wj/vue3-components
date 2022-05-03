import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useStore = defineStore('user', {
  state: () => ({
    name: 'name',
  }),
  getters: {
    getName: (state) => `${state.name}`,
  },
});
