import local from 'passport-local';
import User from '../models/users';

let LocalStrategy = local.Strategy;

module.exports = function (passport) {


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {
        console.log(req.body);
            process.nextTick(() => {
                User.findOne({'local.email': email}, (err, user) => {
                    if (err) {
                        return done(err);
                    }

                    if (user) {
                        return done(null, false, {status:401, message: 'Account with the email exsists'});
                    } else {

                        let newUser = new User();
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.name = req.body.name;

                        newUser.save(function (err) {
                            if (err) {
                                throw err;
                            }
                            return done(null, newUser);
                        });
                    }
                })
            })
        }
    ));

    passport.use('local-signin', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        (req, email, password, done) => {
            process.nextTick(() => {
                User.findOne({'local.email': email}, (err, user) => {
                    console.log(err);
                    if (err) {
                        return done(err);
                    }

                    if (!user) {
                        return done(null, false, {status: 404, message: 'No user found.'});
                    }

                    if (!user.validPassword(password))
                        return done(null, false, {status: 401, message: 'Oops! Wrong password.'});

                    return done(null, user);
                })
            })
        }
    ))
};
