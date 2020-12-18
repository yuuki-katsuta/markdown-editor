import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'

//スタイリングされたコンポーネント作成
//styled.(HTMLタグ名) で生成したい HTML タグを指定して、その後続く `` 内にCSSを記述する
const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`
//localStorage でデータの参照・保存に使うキー名を決める
//ファイルパス:値の名前 という命名規則
const StorageKey = 'pages/editor:text'

export const Editor: React.FC = () => {
  //localStorage から取得した値を useState の初期値に設定(アクセス時に保存されている値を取り出して表示)
  //nullを帰す場合、空の文字列を設定
  const [text, setText] = useState<string>(localStorage.getItem(StorageKey) || '')

  //React.FC（関数コンポーネント）という型を定義
  return (
    <>
      <Header>
        Markdown Editor
      </Header>
      <Wrapper>
        <TextArea
          onChange={(e) => {
            const changedText = e.target.value
            //変更されるたびに localStorage へ保存する
            localStorage.setItem(StorageKey, changedText)
            setText(changedText)
          }}
          value={text}
        />
        <Preview>プレビューエリア</Preview>
      </Wrapper>
    </>
  )
}
