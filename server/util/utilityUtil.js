export const utilityUtil = {
    readCookie: (cookieName, cookie) => {
        let re = new RegExp('[; ]' + cookieName + '=([^\\s;]*)');
        let sMatch = (' ' + cookie).match(re);
        if (cookieName && sMatch) return unescape(sMatch[1]);
        return '';
    },
    getOnlineUsers: (users, userId) => {
        let filteredUsers = {};
        for (let key in users) {
            if (users.hasOwnProperty(key) && key !== userId) {
                filteredUsers[key] = users[key].name;


            }
        }
        return filteredUsers;
    }
};