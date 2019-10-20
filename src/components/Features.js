import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, key) => (
      <section
        key={item.text}
        className={`content-section ${key % 2 === 0 ? "dark" : ""}`}
      >
        <div className="container">
          <div className={`row ${key % 2 === 0 ? "row-reverse" : ""}`}>
            <div className="column">
              <div
                style={{
                  width: "240px",
                  display: "inline-block"
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <div className="column">
              {item.title && <h2>{item.title}</h2>}
              <p>{item.text}</p>
            </div>
          </div>
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
