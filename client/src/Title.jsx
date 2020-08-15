import React from 'react';

var Title = (props) => {
  return (
    <div className="titledivdv">
      <div className="breadcrumbsdv">
        <span>{props.state.product.topcategory}</span>
        <span>> </span>
        <span>{props.state.product.maincategory}</span>
        <span>> </span>
        <span>{props.state.product.subcategory}</span>
      </div>
      <h1 className="titledv">{props.state.product.productname}</h1>
      <div className="conditiontitledv" data-tooltip-text="Hey">
        <div>{props.state.product._condition}</div>
      </div>
      <div className="condition-indicator__barsdivdv">
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
        <span className="condition-indicator__barsdv"></span>
      </div>

    </div>

  );
}
export default Title