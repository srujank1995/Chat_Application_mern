const mongoose = require("mongoose");

const ChatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.ObjectId,
    ref: "Message",
  },
  GroupAdmin: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
},
{
    timestamps: true,
}
);

const Chat = mongoose.model("Chat", ChatModel)
export default Chat