import * as SQLite from "expo-sqlite";

export async function getdata() {
  const db = SQLite.openDatabase("UserTable");
  db.transaction((tx) => {
    tx.executeSql(
      "Create table if not exists UserInfo (UserId Text primary key, UserName Text, UserEmail Text, UserImage Text)",
      null,
      (tx, result) => {},
      (tx, err) => {
        console.log(err);
      }
    );
  });
  let final_result = {};
  const dataUser = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "Select * from UserInfo",
        null,
        (tx, result) => {
          final_result = result.rows._array[0];
          resolve();
        },
        (tx, err) => {
          console.log(err);
          reject();
        }
      );
    });
  });

  await dataUser.then(() => {});
  return final_result;
}

export async function insertUser(userinfo) {
  await new Promise((resolve, reject) => {
    const { UserId, UserName, UserEmail, UserImage } = userinfo;

    const db = SQLite.openDatabase("UserTable");
    db.transaction((tx) => {
      tx.executeSql(
        "Insert into UserInfo (UserId, UserName,UserEmail,UserImage) values (?,?,?,?)",
        [UserId, UserName, UserEmail, UserImage],
        (tx, result) => {
          resolve();
        },
        (tx, err) => {
          console.log(err);
          reject();
        }
      );
    });
  });
}
export async function deleteUser() {
  await new Promise((res, rej) => {
    const db = SQLite.openDatabase("UserTable");

    db.transaction((tx) => {
      tx.executeSql(
        "Delete from UserInfo",
        null,
        (tx, result) => {
          res();
        },
        (tx, err) => {
          console.log(err);
          rej();
        }
      );
    });
  });
  return true;
}
