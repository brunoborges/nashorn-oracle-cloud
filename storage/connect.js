// Custom Settings
var credentials = JSON.parse(readFully("credentials.json"));
var identityDomain = credentials.identityDomain;
var username = credentials.username; 
var password = readFully(credentials.passwordFile).trim();
var service = credentials.serviceName;

// Imports
var CloudStorageConfig = Packages.oracle.cloud.storage.CloudStorageConfig;
var CloudStorageFactory = Packages.oracle.cloud.storage.CloudStorageFactory;

  myConfig = new CloudStorageConfig();
  myConfig.setServiceName(service + "-" + identityDomain)
   .setUsername(username)
   .setPassword(new java.lang.String(password).toCharArray())
   .setServiceUrl("https://storage.us2.oraclecloud.com");
  storageConnection = CloudStorageFactory.getStorage(myConfig);
