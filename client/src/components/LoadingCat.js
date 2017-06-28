import React from 'react'

export default class LoadingCat extends React.Component {
  render() {
    return (
      <div id="loading-cat" className="box">
        <div className="cat">
          <div className="cat__body"></div>
          <div className="cat__body"></div>
          <div className="cat__tail"></div>
          <div className="cat__head"></div>
        </div>
      </div>
    )
  }
}
