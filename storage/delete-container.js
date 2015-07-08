load('connect.js');
var containerName = arguments[0];
print('Deleting container: ' + containerName + ' ...');
storageConnection.deleteContainer(containerName);
print('Container deleted: ' + containerName);
