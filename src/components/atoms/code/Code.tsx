import React from "react"

type CodeProps = {
  code: string
  language: string
}

const Code = ({ code, language }: CodeProps) => {
  return (
    <pre className={`language-${language}`}>
      <code>{code}</code>
    </pre>
  )
}

export default Code
