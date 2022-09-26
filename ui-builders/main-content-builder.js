const mainContentWrapper = document.querySelector(".main-content");

const buildMainContentTextBased = () => {
  data.mainData.map((content) => {
    const { title, description } = content;
    const termContainerElement = buildElement('div', 'class', 'terms-container');
    const titleElement = buildElement('h3', 'class', 'term-name', title);
    const descriptionElement = buildElement('p', 'class', 'term-definition', description);

    termContainerElement.append(titleElement, descriptionElement);
    mainContentWrapper.appendChild(termContainerElement);
  });
};

const buildMainContentPictureBased = () => {
  data.mainData.map((content) => {
    const { image } = content;

    const imageContainer = buildElement("div", "class", "images-container");

    const imgElement = buildElement("img");
    imgElement.src = image;

    mainContentWrapper.appendChild(imageContainer);
    imageContainer.appendChild(imgElement);
  });
};

if (data.pictureBasedInformation) {
   buildMainContentPictureBased();
} else {
   buildMainContentTextBased();
}
