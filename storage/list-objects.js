load('connect.js');
var containerName = arguments[0];
var objects = storageConnection.listObjects(containerName, null);
for each (object in objects) {
  var json = {"key":object.getKey()};
  print(JSON.stringify(json, null, 4));
}
