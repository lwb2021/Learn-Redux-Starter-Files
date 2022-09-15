import React from "react";
import Photo from "./Photo";
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, idx) => (
          <Photo {...this.props} key={idx} i={idx} post={post} />
        ))}
      </div>
    );
  },
});

export default PhotoGrid;
