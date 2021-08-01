//第4章：収支のデータをデータベースに記録
const dbName = "kakeiboDB";
const storeName = "kakeiboStore";
const dbVersion = 1;

let database = indexedDB.open(dbName, dbVersion);

database.onupgradeneeded = function (event) {
  let db = event.target.result;
  db.createObjectStore(storeName, { keyPath: "id"});
  console.log("データベースを新規作成しました")
}

database.onsuccess = function (event) {
  let db = event.target.result;
  // 接続を解除する
  db.close();
  console.log("データベースに接続できました");
}
database.onerror = function (event) {
  console.log("データベースに接続できませんでした");
}