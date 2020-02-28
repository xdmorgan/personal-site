import React from 'react'
import cx from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

import styles from './code-block.module.scss'

export const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={cx(styles.pre, 'p-2x md:p-3x lg:py-4x md:rad-normal')}
        style={style}
      >
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className={cx(styles.line, 'mr-05x md:mr-1x lg:mr-2x')}>
              {i + 1}
            </span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)
