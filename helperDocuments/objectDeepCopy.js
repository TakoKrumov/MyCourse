let deepCopy = obj => {
  if (obj === null) {
  return null;
  };

  let copy = Object.assign({}, obj);
                                      
  Object.keys(copy).forEach( 
                              
    key => 
      (copy[key] =
        typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key])

  );

  if (Array.isArray(obj)) { 
                          
    copy.length = obj.length;
    return Array.from(copy); 
  }
  
  return copy;
};