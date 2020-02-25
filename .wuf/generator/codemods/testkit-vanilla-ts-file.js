module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const imports = root.find(j.ImportDeclaration).paths();
  const exports = root.find(j.ExportNamedDeclaration).paths();

  const { ComponentName, componentName } = options;

  j(imports[imports.length - 1]).insertAfter(
    `import {${ComponentName}UniDriver} from '../src/${ComponentName}/${ComponentName}.uni.driver';`,
  );

  j(exports[exports.length - 1]).insertAfter(
    `export const ${componentName}TestkitFactory: VanillaUniTestkitFactory<${ComponentName}UniDriver>;`,
  );

  return root.toSource();
};

module.exports.parser = 'ts';
