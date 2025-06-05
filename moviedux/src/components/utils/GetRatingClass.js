function getRatingClass(rating) {
  switch (true) {
    case rating > 8.5:
      return "very-good";
    case rating > 7.5 && rating <= 8.5:
      return "good";
    case rating > 6.5 && rating <= 7.5:
      return "average";
    case rating <= 6.5:
      return "bad";
    default:
      return "not-rated";
  }
}

export default getRatingClass;