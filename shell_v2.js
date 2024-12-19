let currentDirectory = '~';
let currentPWD = ['~'];

const echo = function (arrgs) {
  return arrgs.join(' ').replaceAll('"', '');
}

const promptMessage = function () {
  return 'dhanojchery@Dhanojs-MacBook-Pro ' + currentDirectory + ' %';
}

const commands = ['echo', 'which', 'cd'];
const commandFunctions = [echo, 'which', 'cd'];

const runCommand = function (commandStatement) {
  const [command, ...args] = commandStatement.split(' ');

  if (commands.includes(command)) {
    const commandIndex = commands.indexOf(command);
    return commandFunctions[commandIndex](args);
  }

  return 'command not found';
}

const shell = function () {
  while (true) {
    const command = prompt(promptMessage());
    const resultOfCommand = runCommand(command);

    console.log(resultOfCommand);
  }
}

shell();