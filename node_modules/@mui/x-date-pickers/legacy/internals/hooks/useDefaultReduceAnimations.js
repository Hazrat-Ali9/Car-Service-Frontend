import useMediaQuery from '@mui/material/useMediaQuery';
var PREFERS_REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';

// detect if user agent has Android version < 10 or iOS version < 13
var mobileVersionMatches = typeof navigator !== 'undefined' && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
export var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
export var useDefaultReduceAnimations = function useDefaultReduceAnimations() {
  var prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || slowAnimationDevices;
};