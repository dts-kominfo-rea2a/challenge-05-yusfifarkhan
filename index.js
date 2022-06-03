const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrayNames, cbSorting) => {
  const sortedArray = cbSorting(arrayNames);
  const finalArray = (arrayToFormat) => {
    const formatedArray = [];
    for (let index = 0; index < arrayToFormat.length; index++) {
      formatedArray.push(`${index+1}. ${arrayToFormat[index]}`);
    }
    return formatedArray;
  }
  return finalArray(sortedArray);
};


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrayNames) => {
  return arrayNames.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrayNames) => {
  return arrayNames.sort().reverse()
};


// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
