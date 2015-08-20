// Custom Settings
var credentials = JSON.parse(readFully("credentials.json"));
var identityDomain = credentials.identityDomain;
var username = credentials.username; 
var password = readFully(credentials.passwordFile).trim();
var service = credentials.serviceName;
var serviceUrl = credentials.serviceUrl;

// Imports
var CloudStorageConfig = Java.type("oracle.cloud.storage.CloudStorageConfig");
var CloudStorageServiceProvider = Java.type("oracle.cloud.storage.internal.CloudStorageServiceProviderImpl");

function getStorage(myConfig) {
  var provider = new CloudStorageServiceProvider();
  provider.validateConfig(myConfig);
  return provider.createCloudStorage(myConfig);
}

function getEncryptedStorage(myConfig) {
  var provider = new CloudStorageServiceProvider();
  provider.validateConfig(myConfig);
  return provider.createEncryptedCloudStorage(myConfig);
} 

myConfig = new CloudStorageConfig();
myConfig.setServiceName(service + "-" + identityDomain)
 .setUsername(username)
 .setPassword(new java.lang.String(password).toCharArray())
 .setServiceUrl(serviceUrl);

storageConnection = getStorage(myConfig);
