import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <section key={item.text} className="content-section">
        <div className="container">
          <div
            style={{
              width: "240px",
              display: "inline-block"
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          {item.title && <h3>{item.title}</h3>}
          <p>{item.text}</p>
        </div>
      </section>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
