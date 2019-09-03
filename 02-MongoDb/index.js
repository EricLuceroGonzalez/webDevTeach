const { app, port } = require("./server/index");

// Require database
require('./database');


// Start the server
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`);
});


// GetShitdone@Cs0