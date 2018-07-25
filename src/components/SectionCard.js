import React from 'react' 

class SectionCard extends React.Component {
  createSection() {
    const {kind, content, desc, "show_desc": showDesc} = this.props.section
    switch(kind) {
      case 0:
        return (
          <div>
          <p>{content}</p>
          </div>
        )
      case 1:
        return (
          <div>
          <pre>{content}</pre>
          </div>
        )
      case 2:
        return (
          <div>
            <a href={content}>{desc}</a>
          </div>
        )
      case 3:
        if (showDesc) {
          return (
            <div>
              <figure>
                <img src={content} alt={desc} />
                <figcaption>{desc}</figcaption>
              </figure>
          </div>
          )
        } else {
          return (
            <div>
              <figure>
                <img src={content} alt={desc} />
              </figure>
            </div>
          )
        }
      default:
        return <p>Error loading section</p>
    }
  }

  render() {
    return (
      <div>
        {this.createSection()}
      </div>
    )
  }
}

export default SectionCard
