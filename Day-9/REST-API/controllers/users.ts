import { Request, Response } from "express"
import * as fs from 'fs' ;
import User from "../user";
import ErrnoException = NodeJS.ErrnoException


export const getUsers = async (req: Request, res: Response): Promise<void> => {
	await fs.readFile("user.json", "utf-8", (err: ErrnoException | null, data: string) => {
		const usersData: Array<User> = JSON.parse(data)
		res.json(usersData)
	})
	
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
	
		await fs.readFile('user.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const usersData: Array<User> = JSON.parse(data)
			
			usersData.forEach((item: User) => {
				if(item.email === req.query.email) {
					res.json(item)
				}
				else {
					res.send("User not found")
				}
			})
		})
	
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
	const newUser: User = {
		"name": req.body.name,
		"age": req.body.age,
		"email": req.body.email,
		"gender": req.body.gender
	}
	
	await fs.readFile('user.json', 'utf-8',  (err: ErrnoException | null, data: string) => {
		const usersData: Array<User> = JSON.parse(data)
		// console.log(typeof usersData)
		usersData.push(newUser)
		fs.writeFile("user.json", JSON.stringify(usersData), (err: ErrnoException | null) => {
			if(err) {
				res.send('There is an error in writing file')
			}
			else {
				res.send('Data is Added')
			}
		
		})
	})
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
	if(Object.keys(req.query).length === 0) {
		res.redirect('/users/all')
	}
	else {
		const currentEmail: any = req.query.email
		const updatedEmail: string = req.body.email
		
		await fs.readFile('user.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const usersData: Array<User> = JSON.parse(data)
			usersData.forEach((item: User) => {
				if(item.email === currentEmail) {
					
					item.email = updatedEmail
					// console.log(item.email)
				}
			})
			
			fs.writeFile("user.json", JSON.stringify(usersData), (err: ErrnoException | null) => {
				if(!err) {
					res.send('Email is Updated.')
				}
			})
		})
	}
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
	
		const email: any = req.query.email
		await fs.readFile('user.json', 'utf-8', (err: ErrnoException | null, data: string) => {
			const usersData: Array<User> = JSON.parse(data)
			const updatedUsersData: Array<User> = usersData.filter((item: User) => item.email !== email)
			fs.writeFile('user.json', JSON.stringify(updatedUsersData), (err: ErrnoException | null) => {
				if(!err) {
					res.send("User removed successfully")
				}
				else {
					res.send("Error writing to file")
				}
			})
		})
	
}