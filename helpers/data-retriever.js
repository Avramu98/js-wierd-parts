function getSpecificData() {
  
    const isSpecificPage = (page) => {
      return document.URL.includes(page);
    };
  
    const shuffleArray = (array) => {
      const shuffled = array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      return shuffled;
    };
  
    if (isSpecificPage(APP_PAGES.TERMINOLOGY)) {
      return {
        pictureBasedInformation: false,
        mainData: terminologyDataArr,
        quiz: shuffleArray(terminologyQuizArr),
      };
    } else if (isSpecificPage(APP_PAGES.EXECUTION_CONTEXT)) {
      return {
        pictureBasedInformation: true,
        mainData: executionContextDataArr,
        quiz: shuffleArray(executionContextQuizArr),
      };
    } else if(isSpecificPage(APP_PAGES.TYPES_AND_OPERATORS)) {
      return {
        pictureBasedInformation: true,
        mainData: typesAndOperatorsDataArr,
        quiz: shuffleArray(typesAndOperatorsQuizArr)
      }
    } else if (isSpecificPage(APP_PAGES.OBJECTS_AND_FUNCTIONS)) {
      return {
        pictureBasedInformation: true,
        mainData: objectsAndFunctionsDataArr,
        quiz: []
      };
    } else {
      return {
        mainData: [],
        quiz: [],
      };
    }
  }
  
  const data = getSpecificData();