const { ref, get, set, getDatabase, update } = require('firebase/database');
const { initializeApp } = require('firebase/app');
const { firebaseConfig } = require('../configFirebase');
initializeApp(firebaseConfig)
exports.handler = async (event, context) => {
    let message = '';
    let errCode = 0;
    try {
        const db = getDatabase();
        const objectRef = ref(db, 'irregularVerbs'); 
        // Đổi thành đường dẫn thực tế của bạn
        const objectSnapshot = await get(objectRef);
        console.log(event.body);
        console.log(typeof(event.body));
        const newData = JSON.parse(event.body);
        if (!objectSnapshot.exists()) {
            // Nếu không tồn tại irregularVerbs, tạo mới và thêm data vào
            await set(objectRef, newData);
            message = 'Object created and data added to the database';
        } else {
            const objectData = objectSnapshot.val();
            for (const key in newData) {
                if (!objectData[key]) {
                    // Nếu irregularVerbs đã tồn tại nhưng key không tồn tại, thêm data vào
                    await update(objectRef, {[key]: newData[key]});
                    console.log(`Data for key ${key} added to existing object`);
                } else {
                    console.log(`Data for key ${key} already exists. Skipping.`);
                }
            }
            errCode = 1;
            message = 'Object and keyName already exist in the database';
        }
        return{ 
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization, Content-Type"
            },
            body: JSON.stringify({
                errCode: errCode, 
                message: message
            })
        }
    } catch (error) {
        throw(error);
    }
}