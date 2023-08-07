import mongoose, { Document, Schema } from 'mongoose';
interface Video extends Document {
  video: Buffer;  
}

const videoSchema: Schema<Video> = new Schema<Video>({
 video:{type:Buffer,require:true} 
});

const VideoModel = mongoose.model<Video>('Video', videoSchema);

export default VideoModel;