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
            passwordField: 'password'
        },
        (email, password, done) => {
        console.log(email);
            process.nextTick(() => {
                User.findOne({'local.email': email}, (err, user) => {
                    console.log(err);
                    console.log(user);
                    if (err) {
                        console.log(err);
                        return done(err);
                    }

                    if (user) {
                        return done(null, false);
                    } else {

                        let newUser = new User();

                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);

                        newUser.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                })
            })
        }
    ))

};
