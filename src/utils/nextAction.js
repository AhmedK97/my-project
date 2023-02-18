const nextAction = (list, value) => {
  // list = ['left','right','up','down']
  // value = 'left'
  
  const currentActionIndex = list.indexOf(value); // 0
  const nextValueIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextAction;
