const functions = require('firebase-functions');

exports.onMessageCteate = functions.database
    .ref('/data/{pushId}')
    .onCreate((snapshot, context) => {
        const data = snapshot.val()
        const countRef = snapshot.ref.parent.parent.child('playerCount')

        return countRef.transaction(count => {
            let currCount = count + 1
            data.indexOf = currCount
            snapshot.ref.update(data)
            return currCount
        })
    })
