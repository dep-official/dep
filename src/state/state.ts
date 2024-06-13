import { PREV_URL_STATE, TRANSITION_STATE, CURRENT_URL_STATE } from '@/@constants/Recoil';
import { atom } from 'recoil';

const transitionState = atom({
  key: TRANSITION_STATE,
  default: false,
});

const prevUrlState = atom({
  key: PREV_URL_STATE,
  default: '/',
});

const currentUrlState = atom({
  key: CURRENT_URL_STATE,
  default: '/',
});

export { transitionState, prevUrlState, currentUrlState };
