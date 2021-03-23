const pool = require("../database/dbConfig");

exports.getAll = async (req, res) => {
	try {
		const response = await pool.query("SELECT * FROM reports");
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.getByID = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const response = await pool.query(
			"SELECT * FROM reports WHERE id_reporte = $1",
			[id]
		);
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.create = async (req, res) => {
	const { titulo_reporte, descripcion_reporte } = req.body;

	try {
		const response = await pool.query(
			"INSERT INTO reports (titulo_reporte, descripcion_reporte) VALUES ($1, $2)",
			[titulo_reporte, descripcion_reporte]
		);

		res.json({
			message: "Report added succesfully",
			body: {
				user: { titulo_reporte, descripcion_reporte },
			},
		});
	} catch (err) {
		console.log(err);
	}
};

//Cambiar para update del status del reporte
// exports.update = async (req, res) => {
// 	const id = parseInt(req.params.id);
// 	const { titulo_reporte, descripcion_reporte } = req.body;

// 	try {
// 		const response = await pool.query(
// 			"UPDATE reports SET titulo_reporte  WHERE id_usuario = $5",
// 			[nombre, apellidos, email, telefono, id]
// 		);

// 		res.json("User updated succesfully...");
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		await pool.query("DELETE FROM reports where id_reporte = $1", [id]);
		res.json(`Report with ${id} deleted Successfully`);
	} catch (err) {
		console.log(err);
	}
};
