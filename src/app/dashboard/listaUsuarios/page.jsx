import React from 'react'
import axios from 'axios'
import ButtonBlockUser from '@/app/components/ui/ButtonBlockUser'

const loadUsers = async() => {
    // Lógica para cargar usuarios desde la API
    const {data} = await axios.get("http://localhost:3001/api/users")
    return data
}

const ListaUsuarios = async() => {
    const users = await loadUsers()
  
    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Lista de usuarios</h2>
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Nombre</th>
                            <th className="px-4 py-2 text-left">Apellido</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Clave</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Fecha creación</th>
                            <th className="px-4 py-2 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b">
                                <td className="px-4 py-2">{user.id}</td>
                                <td className="px-4 py-2">{user.nombre}</td>
                                <td className="px-4 py-2">{user.apellido}</td>
                                <td className="px-4 py-2">{user.correo}</td>
                                <td className="px-4 py-2">***</td> {/* ocultar la clave */}
                                <td className="px-4 py-2 text-right">{user.status}</td>
                                <td className="px-4 py-2">{user.fecha_creacion}</td>
                                <td className="px-4 py-2 text-right">
                                    <ButtonBlockUser id={user.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListaUsuarios