load('connect.js');
for each (c in storageConnection.listContainers()) {
  print(c.getName());
}

