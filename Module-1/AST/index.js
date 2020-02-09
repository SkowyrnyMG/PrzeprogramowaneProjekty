import { convertASTToString } from './convertASTToString';
import * as data from './ast.json';

console.log(data.ast);

document.querySelector('.container').innerHTML = convertASTToString(
  data.ast.tagName,
  data.ast.attributes,
  data.ast.children
);
