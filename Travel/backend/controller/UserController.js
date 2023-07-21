import db from "../database/db.js";
import User from "../model/regis.js";
import passport from 'passport';
import { useParams } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';


export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      });
  
      if (user) {
        if (bcrypt.compare(req.body.password, user.password)) {
          res.send({
            id: user.id,
            nama: user.nama,
            email: user.email,
            password: user.password,
          });
        }
      } else {
        res.status(404).json({
          message: 'Email atau password salah'
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Internal server error'
      });
    }
  };

export const Register = async(req, res, next) => {
         const { nama, email, password } = req.body;
         const alreadyUser = await User.findOne({ where: { email } })
         .catch((err) => {
            console.log("error", err);
         });

        if(alreadyUser) {
            return res.status(400).json({ message: "Email sudah dipakai" })
        }

        const newUser = new User({ nama, email, password });
        const saveUser = await newUser.save()
        .catch((err) => {
            console.log("error", err);
            res.status(500).json({ error: "Tidak dapat mendaftar pengguna" })
        })

        if(saveUser) {
            res.json({ message: "Registrasi berhasil" })
        }

}
         

