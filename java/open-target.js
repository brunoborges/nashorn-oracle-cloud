// Imports
var jString = java.lang.String;
var jaxrs = Packages.javax.ws.rs;
var jaxrsClient = jaxrs.client;
var jaxrsCore = jaxrs.core;
var DatatypeConverter = Packages.javax.xml.bind.DatatypeConverter;
var ClientBuilder = jaxrsClient.ClientBuilder;

// Functions
function getBasicAuth(credentials) {
  var user = credentials.username;
  var pass = credentials.password;
  var token = new jString("${user}:${pass}");
  var converted = DatatypeConverter.printBase64Binary(token.getBytes("UTF-8"));
  return new jString("BASIC ${converted}");
}

function getAuthenticator(credentials) {
  var basicAuth = getBasicAuth(credentials);
  return new jaxrsClient.ClientRequestFilter() {
    filter: function(requestContext) {
      var headers = requestContext.getHeaders();
      headers.add("Authorization", basicAuth);
      headers.add("X-ID-TENANT-NAME", "${credentials.identityDomain}");
    }
  };
}

function getTarget(credentials) {
  var client = ClientBuilder.newClient();
  client.register(getAuthenticator(credentials));

  return target = client.target("https://jaas.oraclecloud.com/jaas/api/v1.1/instances/${credentials.identityDomain}");
}

// EOF
