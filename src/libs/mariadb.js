import mariadb from "serverless-mysql"

export const conn = mariadb({
    config:{
        host: "localhost",
        user: "root",
        password: "290923",
        port: "3306",
        database: "neymar_app"

    }
})