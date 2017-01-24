import * as React from 'react'
import web from 'styled-components'
import native from 'styled-components/native'


interface Deps {
  Button: React.ComponentClass<any>;
  Text: React.ComponentClass<any>;
}

interface Props<T> {
  children?: React.ReactNode;
}

export function ButtonWeb(props: Props<any>): any {
  return (
    <button>
      <div>{props.children}</div>
    </button>
  )
}
