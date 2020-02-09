const convertASTToString = (tagName, attributes, children) => {
  let html = '';
  html += `<${tagName}`;
  if (attributes && attributes[0].name) {
    attributes.forEach(attribute => {
      html += ` ${attribute.name}="${attribute.value}"`;
    });
    html += `>`;
  }
  if (children && children[0].nodeType) {
    if (children[0].nodeType === 'element') {
      children.forEach(child => {
        html += astToHtml(child.tagName, child.attributes, child.children);
      });
    }
    if (children[0].nodeType === 'text') {
      html += `${children[0].value}`;
    }
  }
  return html + `</${tagName}>`;
};

export { convertASTToString };
