import url from 'url';
import path from 'path';
import process from 'process';
import fs from 'fs';


const ROOT_PATH = process.cwd();
const PKG_JSON_PATH = path.join( ROOT_PATH, 'package.json' );
const PKG_JSON_STR = fs.readFileSync(PKG_JSON_PATH, 'binary');
const PKG_JSON = JSON.parse(PKG_JSON_STR);

const allDependencies = {
  ...PKG_JSON.dependencies || {},
  ...PKG_JSON.devDependencies || {}
}

const builtins = new Set(
  Object.keys(process.binding('natives')).filter((str) =>
    /^(?!(?:internal|node|v8)\/)/.test(str))
);
const JS_EXTENSIONS = new Set(['.js', '.mjs']);


export function resolve(specifier, parentModuleURL, defaultResolve) {
  if (builtins.has(specifier)) {
    return {
      url: specifier,
      format: 'builtin'
    };
  }

  if ( allDependencies && typeof allDependencies[specifier] === 'string' ) {
    return defaultResolve(specifier, parentModuleURL);
  }

  if (/^\.{0,2}[/]/.test(specifier) !== true && !specifier.startsWith('file:')) { 
    throw new Error(
      `imports must begin with '/', './', or '../'; '${specifier}' does not`);
  }
  const resolved = new url.URL(specifier, parentModuleURL);
  const ext = path.extname(resolved.pathname);
  if (!JS_EXTENSIONS.has(ext)) {
    throw new Error(
      `Cannot load file with non-JavaScript file extension ${ext}.`);
  }
  return {
    url: resolved.href,
    format: 'esm'
  };
}