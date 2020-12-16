import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

//スタイリングされたコンポーネント作成
//styled.(HTMLタグ名) で生成したい HTML タグを指定して、その後続く `` 内にCSSを記述する
const Header = styled.h1`
  color:red;
`

const Main = (<Header>Markdown Editor</Header>)
//retunが省略されている
//htmlを返すだけなので丸括弧で囲む

//app という ID を持つ HTML 内の要素に対して Main という変数の内容を紐付ける
render(Main, document.getElementById('app'))
