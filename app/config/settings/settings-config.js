var os = require('os');
var commandLineArgs = process.argv;

function SettingsConfig() {
  this.settings = {};

  initializeSettings(this.settings);
}

function initializeSettings(settings) {
  createArgumentSettings(settings);
  loadConfigSettings(settings);
  loadServerSettings(settings);
}

function createArgumentSettings(settings) {
  settings.clusterEnabled = commandLineArgs[2] ? parseInt(commandLineArgs[2]) : 0;
  settings.environment = commandLineArgs[3] ? commandLineArgs[3].toLowerCase() : 'prod';
  settings.hostName = process.env.OPENSHIFT_DIY_IP ? process.env.OPENSHIFT_DIY_IP : '0.0.0.0';
  settings.masterPort =  commandLineArgs[5] ? parseInt(commandLineArgs[5]) : 3000;
  settings.workerPort =  process.env.OPENSHIFT_DIY_PORT ? process.env.OPENSHIFT_DIY_PORT : 9000;
}

function loadConfigSettings(settings) {
  var config = loadEnvironmentConfigFile(settings);

  var settingsLength = config.settings.length;

  for(var i = 0; i < settingsLength; i++) {
    var configSetting = config.settings[i];

    if(configSetting.name && configSetting.value) {
      settings[configSetting.name] = configSetting.value;
    }
  }
}

function loadServerSettings(settings) {
  settings.serverName = os.hostname().toLowerCase();
  settings.serverCores = os.cpus().length;
}

function loadEnvironmentConfigFile(settings) {
  var config;

  var configLocation = './settings.config.prod.json';

  switch(settings.environment) {
    case 'dev':
      configLocation = './settings.config.dev.json';
      break;
    case 'test':
      configLocation = './settings.config.test.json';
      break;
  }

  try {
    config = require(configLocation);
  }
  catch(e) {
    throw 'Unable to parse "lib/config/settings/"' + configLocation + ': ' + e;
  }

  if(!config.settings) {
    throw 'Property "settings" is no defined: ' + configLocation;
  }

  return config;
}

var settingsConfig = new SettingsConfig();

module.exports = settingsConfig;
