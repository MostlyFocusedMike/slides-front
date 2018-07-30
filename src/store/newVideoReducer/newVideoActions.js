const initState = {
    this.state = {
      fireRedirect: null,
      loadPreview: false,
      slideId = 1,
      sectionId = 1, //video id will always be 0 for these forms, but slides and sections need to increment
      entities: {
        videos: {
          0: { 
            id: 0,
            desc: "",
            youtube_vid: "",
            topics: {selected: [], others: []},
            user: props.currentUser,
            slides: [0] 
          }
        },
        slides: {
          0: {
            id: 0,
            video_id: 0,
            start: 0,
            title: "",
            sections: [0]
          }
        },
        sections: {
          0: {
            id: 0,
            slide_id: 0,
            kind: 0,
            order: 1,
            content: "",
            desc: "",
            show_desc: false
          }
        }
      }
    }
  }
function newVideoReducer(state = initState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default newVideoReducer
