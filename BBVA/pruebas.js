// getUserAgent :: Object -> String
const getUserAgent =  (global) => {
    console.log(global);
    return global && global.navigator && global.navigator.userAgent
};

// isAndroidDevice :: Object -> Boolean
const isAndroidDevice = (global) => {
    console.log(global);
  return /(android)/i.test(getUserAgent(global));
};


console.log(isAndroidDevice(window));