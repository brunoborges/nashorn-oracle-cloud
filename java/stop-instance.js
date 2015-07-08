var stopJson = {
                  "lifecycleState"  : "stop",
                  "lifecycleTimeout" : "30" 
               };

var contentType = 'application/vnd.com.oracle.oracloud.provisioning.Service+json';
var Entity = Packages.javax.ws.rs.client.Entity;
var entity = Entity.entity(JSON.stringify(stopJson), contentType);

var request = getTarget(credentials)
             .path(arguments[1])
             .request();

var response = JSON.parse(
  request.post(entity, jString.class)
);

print(
  JSON.stringify(response, null, 4)
);
