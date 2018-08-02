import {firebaseRetrieval} from "../../api/firebase/firebase-retrieval";
import {
    getTrustedShareSuccess,
    getTrustedShareFailed,
    createGuestShareSuccess,
    createGuestShareFailed
} from "./user-action";
import {firebaseUpdate} from "../../api/firebase/firebase-update";

export const getTrustedShare = (store, uid) => {
    firebaseRetrieval.getTrustedShare(uid)
        .then((trustedShareTransaction) => {
            let trustedShareTransactionWithLocation = [];
            trustedShareTransaction.map((trustee, index) => {
                firebaseRetrieval.getTrustedShareLocation(trustee.sharedBy)
                    .then((location) => {
                        trustedShareTransactionWithLocation.push({...trustee, ...location});
                        if (index === trustedShareTransaction.length - 1) {
                            store.dispatch(getTrustedShareSuccess(trustedShareTransactionWithLocation));
                        }
                    });
                return true;
            })
        })
        .catch((err) => {
            store.dispatch(getTrustedShareFailed());
        });
};

export const createGuestShare = (store, guestShareTransactionDetails) => {
    firebaseUpdate.createGuestShare(guestShareTransactionDetails)
        .then((guestTransactionID) => {
            store.dispatch(createGuestShareSuccess(guestTransactionID));
        })
        .catch((err) => {
            store.dispatch(createGuestShareFailed());
        })
};
