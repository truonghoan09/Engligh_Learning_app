import db from "../server";
const { ref, get, set } = require('firebase/database');

const WriteAnObjectServices = async (data) => {
    try {
        const objectRef = ref(db, 'irregularVerbs'); // Đổi thành đường dẫn thực tế của bạn
        const objectSnapshot = await get(objectRef);

        if (!objectSnapshot.exists()) {
            // Nếu không tồn tại irregularVerbs, tạo mới và thêm data vào
            await set(objectRef, { data });
            return { errCode: 0, message: 'Object created and data added to the database' };
        } else {
            const objectData = objectSnapshot.val();
            if (!objectData[data.keyName]) {
                // Nếu irregularVerbs đã tồn tại nhưng data.keyName không tồn tại, thêm data vào
                await set(ref(objectRef), data);
                return { errCode: 0, message: 'Data added to existing object' };
            } else {
                return { errCode: 1, message: 'Object and keyName already exist in the database' };
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return { errCode: -1, message: 'An error occurred' };
    }
};

module.exports = WriteAnObjectServices;