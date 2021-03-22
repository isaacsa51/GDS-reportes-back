const pool = require("../database/dbConfig");

exports.getAll = async (req, res) => {
	try {
		const response = await pool.query("SELECT * FROM comments");
		res.json(response.rows);
	} catch (err) {
		console.log(err);
	}
};

exports.create = async (req, res) => {
	const { texto } = req.body;

	try {
		const response = await pool.query(
			"INSERT INTO comments (texto) VALUES ($1)",
			[texto]
		);

		res.json({
			message: "Comment added succesfully",
			body: {
				comment: {
					texto,
				},
			},
		});
	} catch (err) {
		console.log(err);
	}
};

exports.delete = async (req, res) => {
	const id = parseInt(req.params.id);

	try {
		await pool.query("DELETE FROM comments where id_comentario = $1", [id]);
		res.json(`Comment with ${id} was deleted successfully`);
	} catch (err) {
		console.log(err);
	}
};
