import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/delete', deleteUser);

router.put('/update', updateUser);

export default router;