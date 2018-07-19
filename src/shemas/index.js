import { Schema, arrayOf } from 'normalizr';
const videoSchema     = Schema('videos');
const slideSchema   = Schema('slides');
const sectionSchema   = Schema('sections');

videoSchema.define({
  slideItems: arrayOf(slideSchema)
});
slideSchema.define({
  sections: arrayOf(sectionSchema)
});

sectionSchema.define({
  section: sectionSchema
});

export {videoSchema, slideSchema, sectionSchema};
