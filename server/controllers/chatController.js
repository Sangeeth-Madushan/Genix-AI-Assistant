import Chat from "../models/Chat.js"

//Api Create a chat
export const createChat = async (req, res) =>{
    try {
        const userId = req.user._id

        const chatData = {
            userId,
            messages: [],
            name: "New Chat",
            userName: req.user.name
        }

        await Chat.create(chatData)
        res.status(201).json({ success: true, message: "Chat created successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create chat", error: error.message })
    }

}

//Api get chats
export const getChats = async (req, res) =>{
    try {
        const userId = req.user._id
        const chats=  await Chat.find({userId}).sort({updatedAt: -1})

        res.status(201).json({ success: true, chats })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}

//Api delete a chat
export const deleteChat = async (req, res) =>{
    try {
        const userId = req.user._id
        const {chatId} = req.body

        await Chat.deleteOne({_id: chatId, userId})
        res.status(201).json({ success: true, message: "Chat Deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}