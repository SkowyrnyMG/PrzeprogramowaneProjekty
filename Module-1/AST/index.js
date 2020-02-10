import { convertASTToString } from './convertASTToString';
import * as data from './ast.json';

document.querySelector('.container').innerHTML = convertASTToString(
  data.ast.tagName,
  data.ast.attributes,
  data.ast.children
);

const showConvertedHTML = () => {
  console.log(`Converted AST from ast.json: `);
  console.log(
    `${convertASTToString(
      data.ast.tagName,
      data.ast.attributes,
      data.ast.children
    )}`
  );
};

showConvertedHTML();
