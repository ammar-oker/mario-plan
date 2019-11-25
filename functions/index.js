const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
        console.log('notification created', doc)
    })
}

exports.projectCreted = functions.firestore
        .document('projects/{project}').onCreate(doc => {

            const project = doc.data();
            const notification = {
                content: 'added new project :)',
                user: `${project.authorFirstName} ${project.authorLastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification);
        })

        exports.userJoind = functions.auth.user()
            .onCreate(user => {

                return admin.firestore().collection('users').doc(user.uid).get()
                    .then(doc => {

                        const user = doc.data();
                        const notification = {
                            content: 'joind the party <3',
                            user: `${user.FirstName} ${user.LastName}`,
                            time: admin.firestore.FieldValue.serverTimestamp()
                        }

                        return createNotification(notification);
                    })
            })