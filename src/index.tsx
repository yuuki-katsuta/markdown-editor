import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {Editor} from './pages/editor'

//styled-components の createGlobalStyle を使って、ページ全体に適用できるスタイルを定義
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`
const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
)

//app という ID を持つ HTML 内の要素に対して Main という変数の内容を紐付ける
render(Main, document.getElementById('app'))
