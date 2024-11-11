CREATE DATABASE neymar_app;

USE neymar_app; 

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

ALTER TABLE usuarios
ADD COLUMN fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM usuarios;

CREATE TABLE contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE usuarios
DROP COLUMN contraseña;

ALTER TABLE usuarios
ADD password varchar(100) NOT NULL AFTER correo;