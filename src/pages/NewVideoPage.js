import React from 'react'

class NewVideoPage extends React.Component {
  state = {
    slideId: 1,
    sectionId: 1, //video id will always be 0 for these forms, but slides and sections need to increment
    entities: {
      videos: {
        0: {
          id: 0,
          desc: "Video description here",
          youtube_vid: "",
          topics: {selected: [], others: []},
          // user: this.props.currentUser
          // slides: [0] // not sure if i actually need this, we'll see
        }
      },
      slides: {
        0: {
          id: 86,
          video_id: 0,
          start: 0,
          title: "Slide One Title Here"
        }
      },
      sections: {
        0: {
          id: 0,
          slide_id: 0,
          kind: 0,
          order: 0,
          content: "Content here",
          desc: "Description here",
          show_desc: false
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>New Video Page</h1>
      </div>
    )
  }
}
export default NewVideoPage
