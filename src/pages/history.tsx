import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/button'

export const History: React.FC = () => {
  //history オブジェクトだけ返却されている
  //history はブラウザの履歴を扱うためのAPIを提供する
  const history = useHistory()
  return (
    <>
      <h1>History</h1>
      <Button onClick={() => { history.push('/editor') }}>
        エディタへ戻る
      </Button>
    </>
  )
  //history.push('遷移したいパス') 指定されたパスに遷移できる。
  //何らかの処理の後に遷移したい場合などはこのように history を使って遷移が可能
}
