// Loads 
load('open-credentials.js');
load('open-target.js');

print('arguments are: ' + arguments + ' and length is '+arguments.length);
if (arguments.length === 0) {
  command = 'list-instances.js';
} else {
  command = arguments[0];
}

load(command); 

print('END OF NASVEN.JS SCRIPT');
