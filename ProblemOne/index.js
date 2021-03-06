var arr = [
  {
    guest_type: "crew",
    first_name: "Marco",
    last_name: "Burns",
    guest_booking: {
      room_no: "A0073",
      some_array: [7, 2, 4],
    },
  },
  {
    guest_type: "guest",
    first_name: "John",
    last_name: "Doe",
    guest_booking: {
      room_no: "C73",
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Jane",
    last_name: "Doe",
    guest_booking: {
      room_no: "C73",
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Albert",
    last_name: "Einstein",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: "crew",
    first_name: "Jack",
    last_name: "Daniels",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Alan",
    last_name: "Turing",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
];

function mutateArray(a) {
  // *Mapping over the array
  a.map(function (guest) {
    Object.keys(guest).map(function (dataPoint) {
      //*Checking for objects in the array
      if (typeof guest[dataPoint] === "object") {
        // *Stores the contents of the object
        const objectChildren = guest[dataPoint];
        // *Creating new key to hold the sum of some_array
        objectChildren.some_total = 0;
        // *Using forEach to run a function that sums up
        objectChildren.some_array.forEach(function (item) {
          objectChildren.some_total += item;
        });
        // *Deleting old array
        delete objectChildren.some_array;
        // *Deleting parent element
        delete guest[dataPoint];
        // *Combining contents of the objects with original array
        guest = Object.assign(guest, objectChildren);
      }
    });
  });
  // *Using the filter method to create a new array
  a = a.filter(function (type) {
    let guests =
      // *Only returns arrays with correct guest_type of "guest"
      type.guest_type === "guest";
    return guests;
  });
  // *Using the sort method to compare last and first times and place them in alphabetical order.
  a.sort(function (a, b) {
    // *Adding names together so when they compare its for both names
    one = a.last_name + a.first_name;
    two = b.last_name + b.first_name;
    if (one < two) return -1;
  });

  return a;
}

$(document).ready(function () {
  $("#originalArray").html(JSON.stringify(arr, null, 2));
  $("#resultsArray").html(JSON.stringify(mutateArray(arr), null, 2));
});
