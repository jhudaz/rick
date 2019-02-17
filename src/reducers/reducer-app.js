function getInitialState() {
  return {
    top: [],
    courses: []
  }
}

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case "GET_TOP_COURSES":
      return {
        ...state,
        top: action.payload
      };
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload
      };

    default:
      return state;
  }
}
