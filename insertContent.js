/**/
function insertContent({
  parent: parent,
  element: element,
  type: type,
  id: id,
  forName: forName,
  className: className,
  href: href,
  text: text,
  name: name,
  placeholder: placeholder,
  src: src,
  rel: rel,
  value: value,
  target: target,
}) {
  const elementCreate = [];
  for (let e of element) {
    for (let i in element) {
      elementCreate.push(document.createElement(e));

      if (type) elementCreate[i].setAttribute("type", type);
      if (id) elementCreate[i].setAttribute("id", id);
      if (forName) elementCreate[i].setAttribute("for", forName);
      if (className) elementCreate[i].setAttribute("class", className);
      if (href) elementCreate[i].setAttribute("href", href);
      if (text) elementCreate[i].innerText = text;
      if (placeholder)
        elementCreate[i].setAttribute("placeholder", placeholder);
      if (src) elementCreate[i].setAttribute("src", src);
      if (rel) elementCreate[i].setAttribute("rel", rel);
      if (value) elementCreate[i].setAttribute("value", value);
      if (name) elementCreate[i].setAttribute("name", name);
      if (target) elementCreate[i].setAttribute("target", target);

      parent.appendChild(elementCreate[i]);
    }
  }

  return elementCreate;
}
