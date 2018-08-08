import express from 'express';
import {experienceUtil} from "../util/experienceUtil";

let router = express.Router();


module.exports = function (passport) {

    router.post('/signup', (req, res, next) => {
        passport.authenticate('local-signup', (err, user, info) => {
            if (err)
                return next(err);
            if (!user)
                return res.status(info.status).send(info);
            req.login(user, (err) => {
                if (err)
                    return next(err);
                return res.send(200, experienceUtil.constructUserExperience(user));
            })
        })(req, res, next);
    });

    router.post('/signin', (req, res, next) => {
        passport.authenticate('local-signin', (err, user, info) => {
            console.log(err);
            if (err)
                return next(err);
            if (!user)
                return res.status(info.status).send(info);
            req.login(user, (err) => {
                if (err)
                    return next(err);
                return res.status(200).send(experienceUtil.constructUserExperience(user));
            })
        })(req, res, next);
    });

    return router;
};
