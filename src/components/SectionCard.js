import React from 'react' 

class SectionCard extends React.Component {
  createSection() {
    const {kind, content, desc, "show_desc": showDesc} = this.props.section
    console.log(content);
    let text = ""
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
          return <img src={content} alt={desc} />
        }
    }
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        {this.createSection()}
      </div>
    )
  }
}

export default SectionCard
