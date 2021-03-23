const pool = require("../database/dbConfig");

exports.getAll = async (req, res) => {
	try {
		const response = await pool.query("SELECT * FROM companies");
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.getByID = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const response = await pool.query(
			"SELECT * FROM companies WHERE id_empresa = $1",
			[id]
		);
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.create = async (req, res) => {
	const {
		nombre,
		nombre_responsable,
		direccion,
		email,
		telefono,
		password,
	} = req.body;

	try {
		const response = await pool.query(
			"INSERT INTO companies (nombre, nombre_responsable, direccion, email, telefono, password) VALUES ($1, $2, $3, $4, $5, $6)",
			[nombre, nombre_responsable, direccion, email, telefono, password]
		);

		res.json({
			message: "Company added succesfully",
			body: {
				company: {
					nombre,
					nombre_responsable,
					direccion,
					email,
					telefono,
					password,
				},
			},
		});
	} catch (err) {
		console.log(err);
	}
};

exports.updateInfo = async (req, res) => {
	const id = parseInt(req.params.id);
	const { nombre, nombre_responsable, direccion, email, telefono } = req.body;

	try {
		const response = await pool.query(
			"UPDATE companies SET nombre = $1, nombre_responsable = $2, direcion = $3, email = $4, telefono = $5 WHERE id_empresa = $6",
			[nombre, apellidos, email, telefono, id]
		);

		res.json("Company updated succesfully...");
	} catch (err) {
		console.log(err);
	}
};

exports.changePassword = async (req, res) => {
	const id = parseInt(req.params.id);
	const password = req.params.password;

	try {
		const response = await pool.query(
			"UPDATE companies SET password = $1 WHERE id_empresa = $2",
			[password, id]
		);

		res.json("Password changed...");
	} catch (err) {
		console.log(err);
	}
};

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		await pool.query("DELETE FROM companies where id_empresa = $1", [id]);
		res.json(`Company with ${id} was deleted successfully...`);
	} catch (err) {
		console.log(err);
	}
};
