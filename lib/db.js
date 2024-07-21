import mysql from 'mysql2/promise'

export async function query({query , values = []}){
    const conn = await mysql.createConnection({
        // host : 'host.docker.internal',
        // 127.0.0.1
        // 103.245.39.106
        host : 'mysql',
        // host : 'localhost',
        user : 'root',
        database: 'daihatsu_service_queue',
        password : 'mahmudinproject',
        // password : '',
        port: '3306'
    })

    try {
        const [results] = await conn.execute(query, values);
        conn.end();
        console.log(results)
        return results;
      } catch (error) {
        // throw Error(error.message);
        console.log(error.message)
        return error.message;
      }
}