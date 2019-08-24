import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import styled from 'styled-components'

export const Pre = styled.pre`
  margin: var(--space-5) 0;
  padding: var(--space-2);

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  margin-right: var(--space-1);
  user-select: none;
  opacity: 0.3;
`

export const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default CodeBlock
