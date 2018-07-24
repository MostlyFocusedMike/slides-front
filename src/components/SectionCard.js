import React from 'react' 

class SectionCard extends React.Component {
  createSection() {
    const {kind, content, desc, "show_desc": showDesc} = this.props.section
    switch(kind) {
      case 0:
        return <p>{content}</p>;
      case 1:
        return <pre>{content}</pre>
      case 2:
        return <a href={content}>{desc}</a>
      case 3:
        if (showDesc) {
          return (
            <figure>
              <img src={content} alt={desc} />
              <figcaption>{desc}</figcaption>
            </figure>
          )
        } else {
          return (
            <figure>
              <img src={content} alt={desc} />
            </figure>
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
