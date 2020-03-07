const React = require('react')

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  headComponents.push(<link rel="stylesheet" href="/skeletor.min.css" />)
  replaceHeadComponents(headComponents)
}
