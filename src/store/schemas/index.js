import { schema } from 'normalizr';
import normalizeVideo from "./normalizers"

const sectionSchema = new schema.Entity('sections');
const slideSchema = new schema.Entity('slides',{
  sections: [sectionSchema]
});
const videoSchema = new schema.Entity('self', {
  slides: [slideSchema]
});

export {normalizeVideo, sectionSchema, slideSchema, videoSchema}  
