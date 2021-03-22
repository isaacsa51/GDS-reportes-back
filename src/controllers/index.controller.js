const { Pool } = require("pg");
const pool = new Pool({
	host: "localhost",
	user: "postgres",
	password: "root",
	database: "reportes",
	port: "5432",
});

const getDBInfo = (req, res) => {
	res.send("Rutas creadas: /users");
};

const getUsers = async (req, res) => {
	const response = await pool.query("SELECT * FROM users");
	res.json(response.rows);
};

const createUser = async (req, res) => {
	const { nombre, apellidos, email, telefono } = req.body;

	try {
		const response = await pool.query(
			"INSERT INTO user (nombre, apellidos, email, telefono) VALUES ($1, $2, $3, $4)",
			[nombre, apellidos, email, telefono]
		);

		res.json({
			message: "User added succesfully",
			body: {
				user: { nombre, apellidos, email, telefono },
			},
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getDBInfo,
	getUsers,
	createUser,
};
