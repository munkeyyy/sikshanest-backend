import express from "express"
import { deleteUser, getSingleUser, getUsers, signIn, signUp, updateUser } from "../controllers/user.controller"

const router =express.Router()

router.post("/sign-in",signIn)
router.post("/sign-up",signUp)
router.get("/get-users", getUsers)
router.get("/get-users/:id", getSingleUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id",deleteUser)

export default router