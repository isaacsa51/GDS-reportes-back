exports.infoAPI = (req, res) => {
	res.send(`
    <div>
        <h2>Rutas creadas dentro del API</h2>

        <ul>
            <li>/users</li>
            <li>/users/[id_usuario]</li>
                <ul>
                    <li>GET para obtener un usuario por ID</li>
                    <li>PUT para actualizar un usuario por ID</li>
                    <li>DELETE para eliminar un usuario</li>
                </ul>
            <li>/companies</li>
            <li>/companies/[id_empresa]</li>
                <ul>
                    <li>GET para obtener una empresa por ID</li>
                    <li>PUT para actualizar la información por ID</li>
                    <li>PUT para actualizar password</li>
                    <li>DELETE para eliminar una empresa</li>
                </ul>
            <li>/comments</li>
            <li>/comments/[id_comentario]</li>
                <ul>
                    <li>DELETE para eliminar un usuario</li>
                </ul>
        </ul>
    </div>`);
};
