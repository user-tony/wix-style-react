const path = require('path');
const fs = require('fs');

const ROOT_DIR = process.cwd();
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const components_meta = require(resolvePath('.wuf/components.json'));

Object.entries(components_meta).forEach(([component, data]) => {
  const component_path = path.resolve(
    `${ROOT_DIR}/test/types/${component}.tsx`,
  );

  if (!fs.existsSync(component_path)) {
    throw new Error(`${component} component does not have a type test!`);
  }
});
