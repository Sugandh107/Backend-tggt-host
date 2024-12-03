import express from 'express';
import { getallFriends,addFriend, addBadge } from '../controllers/friendsController';

const router=express.Router()

router.post("/addFriend",addFriend);
router.get("/getFriends",getallFriends);
router.post('/friends/addBadge', addBadge);  

export default router