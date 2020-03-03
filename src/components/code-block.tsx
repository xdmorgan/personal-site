import React from 'react'
import cx from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

import styles from './code-block.module.scss'

export const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={cx(styles.pre, 'px-3x py-4x md:rc-normal')} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className={cx(styles.line, 'mr-1x lg:mr-2x')}>{i + 1}</span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
