const express = require("express")
const router = express.Router()
const { usermodel } = require('../database')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "mynameisisdfhhfdoifhihghikdhfh"


router.post('/',
    body('email', 'This is not an email').isEmail(),
    body('name', 'Minimum length should be 5 characters').isLength({ min: 5 }),
    body('password', 'Minimum length should be 5 characters').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPasskey = await bcrypt.hash(req.body.password, salt)

        try {
            await usermodel.create({
                'name': req.body.name,
                'email': req.body.email,
                'password': secPasskey,
            })

            console.log("User creation success")
            res.send({ success: true })

        }
        catch (err) {
            console.log("Some error has occured please try again")
            res.send({ success: false })
        }
    }
)

module.exports = router;