const express = require("express");
const app = express();
const PORT = 5000;

app.listen(5000, () => {
	console.log(`Server on port ${PORT}`);
});

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use(require("./routes/index"));
