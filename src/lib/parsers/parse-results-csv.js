const fs = require("fs");
const Papa = require("papaparse");
const _ = require("lodash");
const { mapKeys } = require("lodash");

const renameKeys = (obj) => {
  const keyMap = {
    "": "place",
    "Overall - Female": "name",
    _3: "gender",
    _4: "sea otter",
    _5: "unbound",
    _6: "crusher",
    _7: "leadville",
    _8: "chequamegon",
    _9: "the rad",
    _10: "big sugar",
    _11: "total points",
  };

  return mapKeys(obj, (value, key) => keyMap[key] || key);
};

const parseCSV = (filePath) => {
  fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.error(err);
      return;
    }

    const { data } = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });
    const remappedData = data.map(renameKeys);
    const cleanedData = remappedData.map((row) => {
      for (const [key, value] of Object.entries(row)) {
        if (key.includes("Unnamed") || value === "") {
          delete row[key];
        }
      }

      return row;
    });

    const [femaleData, maleData] = _.partition(cleanedData, {
      Gender: "Female",
    });
    console.log("Female Objects:", femaleData);
    console.log("Male Objects:", maleData);
  });
};

const filePath = process.argv[2];
parseCSV(filePath);
