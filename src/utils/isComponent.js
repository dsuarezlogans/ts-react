import { isValidElementType } from 'react-is'

const createIsComponent = isRequired =>
  (props, propName, componentName) => {
    if(props[propName] == null){
      if(isRequired){
        return new Error(`${propName} is required in ${componentName}.`);
      }
      return null;
    }else{
      if (!isValidElementType(props[propName])) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}.`);
      }
      return null;
    }
  };

const isComponent = createIsComponent(false);
isComponent.isRequired = createIsComponent(true);

export default isComponent;
