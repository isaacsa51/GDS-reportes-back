const pool = require("../database/dbConfig");

exports.getAll = async (req, res) => {
	try {
		const response = await pool.query("SELECT * FROM users");
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.getByID = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const response = await pool.query(
			"SELECT * FROM users WHERE id_usuario = $1",
			[id]
		);
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.create = async (req, res) => {
	const { nombre, apellidos, email, telefono } = req.body;

	try {
		const response = await pool.query(
			"INSERT INTO users (nombre, apellidos, email, telefono) VALUES ($1, $2, $3, $4)",
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

exports.update = async (req, res) => {
	const id = parseInt(req.params.id);
	const { nombre, apellidos, email, telefono } = req.body;

	try {
		const response = await pool.query(
			"UPDATE users SET nombre = $1, apellidos = $2, email = $3, telefono = $4 WHERE id_usuario = $5",
			[nombre, apellidos, email, telefono, id]
		);

		res.json("User updated succesfully...");
	} catch (err) {
		console.log(err);
	}
};

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		await pool.query("DELETE FROM users where id_usuario = $1", [id]);
		res.json(`User ${id} deleted Successfully`);
	} catch (err) {
		console.log(err);
	}
};
