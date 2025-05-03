import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-HFYR6TKL40";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const logEvent = (action, category, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
