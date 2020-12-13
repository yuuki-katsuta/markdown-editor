import * as React from 'react'
import { render } from 'react-dom'

const Main = (<h1>Markdown Editor</h1>)
//retunが省略されている
//htmlを返すだけなので丸括弧で囲む

//app という ID を持つ HTML 内の要素に対して Main という変数の内容を紐付ける
render(Main, document.getElementById('app'))
