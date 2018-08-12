
// switchColor used in Simon component
function switchColor(state, props) {
  return {
    startingColor: state.switchColor,
    switchColor: state.startingColor
  };
};
export {switchColor};
