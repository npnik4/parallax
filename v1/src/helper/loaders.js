import Rellax from "rellax";

export const loadHeroRellax = () => {
  new Rellax(".planet", {
    speed: 3,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  new Rellax(".title", {
    speed: -3,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  new Rellax(".rock", {
    speed: 1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });
};
