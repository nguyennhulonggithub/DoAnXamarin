import * as SQLite from "expo-sqlite";

export async function getResume() {
  const db = SQLite.openDatabase("UserTable");
  db.transaction((tx) => {
    tx.executeSql(
      "Create table if not exists Resume (idManga Integer primary key, mangaTitle Text, chapterName Text, chapterId Integer, percent_read Integer, time_read Integer, chapterOrder Integer, image_chapter Text, total_height Real)",
      null,
      (tx, result) => {},
      (tx, err) => {
        console.log(err);
      }
    );
  });
  let final_result = {};
  const dataResume = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "Select * from Resume order by time_read desc",
        null,
        (tx, result) => {
          final_result = result.rows._array;
          resolve();
        },
        (tx, err) => {
          console.log(err);
          reject();
        }
      );
    });
  });

  await dataResume.then(() => {});
  return final_result;
}

export async function insertResume(ResumeInfo) {
  await new Promise((resolve, reject) => {
    const {
      idManga,
      mangaTitle,
      chapterName,
      chapterId,
      percent_read,
      time_read,
      chapterOrder,
      image_chapter,
      total_height,
    } = ResumeInfo;

    const db = SQLite.openDatabase("UserTable");

    db.transaction((txt) => {
      txt.executeSql(
        "Insert or Replace into Resume ( idManga,mangaTitle, chapterName, chapterId,percent_read,time_read,chapterOrder,image_chapter,total_height) values (?,?,?,?,?,?,?,?,?)",
        [
          idManga,
          mangaTitle,
          chapterName,
          chapterId,
          percent_read,
          time_read,
          chapterOrder,
          image_chapter,
          total_height,
        ],
        (txt, result) => {
          resolve();
        },
        (txt, err) => {
          console.log(err);
          reject();
        }
      );
    });
  });
}
export async function deleteResume() {
  await new Promise((res, rej) => {
    const db = SQLite.openDatabase("UserTable");

    db.transaction((tx) => {
      tx.executeSql(
        "Drop table Resume",
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
