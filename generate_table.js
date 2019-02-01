function generateLine(headers) {
  for (i = "-"; i.length <= headers.join(" | ").length; i += "-") str = i;
  return str;
}

function generateFields(headers) {
  return headers.join(" | ");
}

function generateTable(headers, data) {
  console.log(generateLine(headers));
  console.log(generateFields(headers));
  console.log(generateLine(headers));
  data.map((dt, i) => {
    console.log(dt.join(" | "));
    console.log(generateLine(headers));
  });
}

generateTable(
  [
    "Id",
    "FieldId",
    "FileName",
    "UploadedBy",
    "UploadedDateTime",
    "InvokedAPI",
    "Processed"
  ],
  [
    ["1", "2", "FieldName1", "User1", new Date().toISOString(), true, false],
    ["2", "3", "FieldName2", "User2", new Date().toISOString(), true, false],
    ["3", "4", "FieldName10", "User3", new Date().toISOString(), true, false],
    ["4", "5", "FieldName5", "User4", new Date().toISOString(), true, false]
  ]
);
