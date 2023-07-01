import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('myuser.db')

export const init = ()=>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'create table if not exists myuser (id text primary key not null,username text not null, token text not null);',
                [],
                ()=>{resolve()},
                (_,err)=>{reject(err)}
            )
        })
    })
    return promise
}

export const insertUser = (id,username,token)=>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'insert into myuser (id,username,token) VALUES (?,?,?);',
                [id,username,token],
                (_,result)=>{resolve(result)},
                (_,err)=>{
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const fetchUser = ()=>{
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM user',
                [],
                ()=>{resolve()},
                (err)=>{
                    reject(err)
                }
            )
        })
    })
    return promise
}