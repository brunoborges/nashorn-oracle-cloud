var request = getTarget(credentials).path(arguments[1]).request();

var response = JSON.parse(
    request.get(jString.class)
);

print(
   JSON.stringify(
     response, null, 4)
);
