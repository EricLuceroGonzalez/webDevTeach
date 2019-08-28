var testJSON = {
  key1: { name: "Name A", message: "messageA" },
  key2: { name: "Name B", message: "messageB" },
  key3: { name: "Name C", message: "messageC" },
  key4: { name: "Name D", message: "messageD" },
  key5: { name: "Name E", message: "messageE" },
  key6: { name: "Name F", message: "messageF" }
};

for (var key in testJSON) {
  // skip loop if the property is from prototype
  console.log("------");
  console.log(key);

  if (!testJSON.hasOwnProperty(key)) continue;

  var obj = testJSON[key];
  console.log(`Obj: ${obj.name}`);
  console.log(`Obj: ${obj.message}`);

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(prop)) continue;
    console.log(`prop: ${obj[prop].name}`);
  }
}


