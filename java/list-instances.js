var request = getTarget(credentials).request();

var response = JSON.parse(
    request.get(jString.class)
);

print(
   JSON.stringify(
     response, null, 4)
);
