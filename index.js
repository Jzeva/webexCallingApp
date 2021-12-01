const child_process = require('child_process');

var openURL = function (url) {
  //determine the platform
  switch (process.platform) {
    // Mac uses open
    case "darwin":
      child_process.spawn('open', [url]);
      break;
    // Windows uses start
    case "win32":
      child_process.spawn('start', [url]);
      break;
    // Linux and so on uses xdg-open
    default:
      child_process.spawn('xdg-open', [url]);
  }
};

openURL("https://www.greenfieldit.com.au/");