let childCounter = 0;

const convertASTToString = (tagName, attributes, children) => {
  let html = '';
  html += `<${tagName}`;

  if (attributes && attributes[0].name) {
    html += attributes.reduce((attrHtml, attribute) => {
      attrHtml += ` ${attribute.name}="${attribute.value}"`;
      return attrHtml;
    }, '');
    html += `>`;
  }

  if (children && children[0].nodeType) {
    if (children[0].nodeType === 'element') {
      childCounter++;

      html += children.reduce((childHtml, child) => {
        childHtml += `\n${insertTabs(childCounter)}${convertASTToString(
          child.tagName,
          child.attributes,
          child.children
        )}`;

        return childHtml;
      }, '');

      childCounter--;
      html += `\n${insertTabs(childCounter)}</${tagName}>`;
      return html;
    }
    if (children[0].nodeType === 'text') {
      html += `${children[0].value}`;
    }
  }
  return html + `</${tagName}>`;
};

const insertTabs = counter => {
  let tab = '';
  for (let i = 0; i < counter; i++) {
    tab += `\t`;
  }
  return tab;
};

export { convertASTToString };
