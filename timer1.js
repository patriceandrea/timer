

'use strict';
const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const time = args[i]
  if (time < 0 || time !== typeof (Number)) {
    break;
  }
  setTimeout(() => console.log(`${args[i]} seconds`), time);
  process.stdout.write('\x07');
}





