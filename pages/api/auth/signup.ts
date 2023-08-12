import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { firstName, lastName, email, city, phone, password } = req.body;
		const errors: string[] = [];

		const validationSchema = [
			{
				valid: validator.isLength(firstName, {
					min: 1,
					max: 20,
				}),
				errorMessage: "First Name is Invalid",
			},
			{
				valid: validator.isLength(lastName, {
					min: 1,
					max: 20,
				}),
				errorMessage: "Last Name is Invalid",
			},
			{
				valid: validator.isEmail(email),
				errorMessage: "Email Name is Invalid",
			},
			{
				valid: validator.isStrongPassword(password),
				errorMessage: "Password is Not Strong Enough!",
			},
			{
				valid: validator.isLength(city, {
					min: 1,
				}),
				errorMessage: "City is Invalid",
			},
			{
				valid: validator.isMobilePhone(phone),
				errorMessage: "Phone Number is Invalid",
			},
		];

		validationSchema.forEach((check) => {
			if (!check.valid) {
				errors.push(check.errorMessage);
			}
		});

		if (errors.length) {
			return res.status(400).json({ errorsMessage: errors[0] });
		}

		const userWithEmail = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (userWithEmail) {
			return res
				.status(400)
				.json({ errorsMessage: "Email is associated with another account!" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				first_name: firstName,
				last_name: lastName,
				password: hashedPassword,
				city,
				phone,
				email,
			},
		});

		const alg = "HS256";
		const secret = new TextEncoder().encode(process.env.JWT_SECRET);

		const token = await new jose.SignJWT({ email: user.email })
			.setProtectedHeader({ alg })
			.setExpirationTime("24h")
			.sign(secret);

		setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

		return res.status(200).json({
			firsName: user.first_name,
			lastName: user.last_name,
			email: user.email,
			city: user.city,
			phone: user.phone,
		});
	}
	return res.status(404).json("Unknown endpoint");
}
