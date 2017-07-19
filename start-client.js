const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'react-ui', shell: true };
require('child_process').spawn('npm', args, opts);