function buildElement(
  elementType,
  cssSelectorType,
  selectorValue,
  textContent,
) {
  const element = document.createElement(elementType);
  if(textContent) element.innerHTML = textContent;
  if (cssSelectorType) element.setAttribute(cssSelectorType, selectorValue);
  return element;
}
