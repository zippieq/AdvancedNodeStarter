import prodConfig from './prod.js';
import ciConfig from './ci.js';
import devConfig from './dev.js';

const env = process.env.NODE_ENV || 'development';

let keys;

switch (env) {
  case 'production':
    keys = prodConfig;
    break;
  case 'ci':
    keys = ciConfig;
    break;
  default:
    keys = devConfig;
}

export default keys;