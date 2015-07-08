var credentials = JSON.parse(readFully("credentials.json"));
var password = readFully(credentials.passwordFile).trim();

print('---- Credentials ----');
credentials.password = '**********';
print(JSON.stringify(credentials, null, 4));
credentials.password = password;
