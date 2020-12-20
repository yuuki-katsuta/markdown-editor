import Dexie from "dexie";

//IndexedDB に保存するデータの型を定義
export interface MemoRecord {
  datetime: string;
  title: string;
  text: string;
}

//データベース名は markdown-editor として、Dexieインスタンス作成
const database = new Dexie("markdown-editor");
//.version(1) はデータベースのバージョン
//.stores() で使用するテーブルとインデックスとなるデータ名を指定
database.version(1).stores({ memos: "&datetime" });
//最後にデータを扱うテーブルクラスを取得
// MemoRecord はデータの型で、2つ目の string はキーとなるデータ（今回は datetime）の型
const memos: Dexie.Table<MemoRecord, string> = database.table("memos");

//テーブルに保存する処理

//タイトルとテキストを引数として受け取る
export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString();
  //IndexedDBに保存
  await memos.put({ datetime, title, text });
};
