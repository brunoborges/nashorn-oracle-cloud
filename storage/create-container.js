load('connect.js');
var containerName = arguments[0];
print('Creating storage: ' + containerName + ' ...');
var container = storageConnection.createContainer(containerName);
print('Container created: ' + container);
