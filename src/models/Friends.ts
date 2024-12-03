import mongoose, { Document, Schema } from 'mongoose';

interface IBadges{
  name:string,
  image:string
}

interface IFriends extends Document {
  playerId: String;
  name: String;
  img: String;
  gameName:String;
  badges:IBadges[];
}

const friendsSchema: Schema = new Schema(
  {
    playerId: { type: String, required: true },
    name: { type: String, required: true},
    img: { type: String, required: true },
    gameName:{type:String,require:true},
    badges:[
      {
        name:{type:String,require:true},
        img:{type:String,require:true}
      }
    ]
  },
);

const Friends = mongoose.model<IFriends>('friends', friendsSchema);

export default Friends;
