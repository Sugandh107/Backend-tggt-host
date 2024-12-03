import { Request,Response } from "express";
import Friends from "../models/Friends";
import { log } from "console";

export const addFriend=async (req:Request,res:Response)=>{
    const {playerId,name,img,gameName}=req.body;

    try {
        const newFriend = new Friends({ playerId,name, img, gameName });
        await newFriend.save();
        res.status(201).json({ message: 'Friend added successfully', friend: newFriend });
      } catch (error) {
        res.status(500).json({ message: 'Error creating friend', error });
      }
}

export const getallFriends= async (req: Request, res: Response): Promise<void> =>{
    try {
      const newFriend = await Friends.find();
      res.status(200).json(newFriend);
    } catch (error) {
        res.status(500).json({message:"Error fetching friend",error})
    }
}

export const addBadge = async (req: Request, res: Response): Promise<void> => {
  const { playerId, badge } = req.body;
try{
   // Find the player by playerId
   const player = await Friends.findOne({ playerId });
   if (!player) {
     res.status(404).json({ message: "Player not found" });
     return;
   }

   // Check if the badge already exists (deep equality check)
   const badgeExists = player.badges.some(
     (existingBadge) => existingBadge.name === badge.name && existingBadge.image === badge.image
   );

   if (!badgeExists) {
     // Add the badge if it doesn't already exist
     player.badges.push(badge);
     await player.save();
     res.status(200).json({ message: "Badge added successfully", player });
   } else {
     res.status(400).json({ message: "Badge already exists" });
   }
 } catch (error) {
   res.status(500).json({ message: "Error adding badge", error });
 }
};