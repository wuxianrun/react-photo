require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

var imageDatas = require('../data/imageURL.json');

imageDatas = (function genImageURL(imageDatasArr){

  for(var i = 0, j = imageDatasArr.length; i < j; i++){

    let singleImagesData = imageDatasArr[i];

    singleImagesData.imageURL = require('../images/'+singleImagesData.fileName);

    imageDatasArr[i] = singleImagesData;
  }
  return imageDatasArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
        <figure>
          <img src={this.props.data.imageURL} />
          <figcaption>
          <h2>{this.props.data.title}</h2>
          </figcaption>
        </figure>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function(value){
        imgFigures.push(<ImgFigure data={value} />);
    })

    return (
        <section className="stage">
          <section className="img-sec">
          {imgFigures}
          </section>
          <nav className="controller-nav">
          {controllerUnits}
          </nav>
        </section>
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
