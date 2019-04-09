// validateDate.js contains logic for validating the user input for the next improving implementation: changing order date
// Validate date using regex

// Next improving implementation would be validating by using moment.js
// import moment from 'moment';

const dateRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/g;

export default (date) => {
  if(!dateRegex.test(date)) {
    return "New order date is invalid.";
  }
  // const checkedDate = moment(date, 'MM/DD/YYYY', true);
  // if (!checkedDate.isValid) {
  //   return "New order date is invalid.";
  // }
  return;
};
