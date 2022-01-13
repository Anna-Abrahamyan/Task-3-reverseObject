"use strict";

const obj = {
  name: "Jon",
  country: {
    name: "Armenia",
    code: 374,
    moreInfo: {
      city: "Yerevan",
    },
  },
};

const reverseObject = (object) => {
  let result = {};
  Object.entries(object).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      result[key] = reverseObject(value);
      result = { ...result };
      return;
    }
    result[value] = key;
  });
  return result;
};

console.log(reverseObject(obj));
