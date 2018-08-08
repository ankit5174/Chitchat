export const experienceUtil = {
    constructUserExperience: (user) => {
        return {
            name: user.name,
            email: user.local.email
        }
    }
};