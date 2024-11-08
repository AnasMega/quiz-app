// "use client";

import { useMemo } from "react";

const page = () => {
  function sort(array: number[]) {
    for (let index = 0; index < array.length; index++) {
      for (let inner = index + 1; inner < array.length; inner++) {
        if (array[index] > array[inner]) {
          let temp = array[index];

          array[index] = array[inner];
          array[inner] = temp;
        }
      }
      console.log("Sorted", array[index]);
    }
  }

  function duplicateCheck(value: string) {
    const char = value.split("");
    let name: Object = {};
    for (let index: number = 0; index < char.length; index++) {
      if (name !== char[index]) {
        name = char[index];
        console.log(name);
      }
    }
  }
  fetch("dummyjson")
    .then((res) => console.log("res", res))
    .catch((err) => console.log("error", err));
  useMemo(() => {
    duplicateCheck("Anas");
  }, []);
  // sort([5, 4,53,53,353,53,43,43,43,43,43,4,34,34,3,5,76,68,67,856,79,46,756,435,523,4543,756,744, 2, 1, 5, 1, 0, 5]);

  return <div></div>;
};

export default page;
