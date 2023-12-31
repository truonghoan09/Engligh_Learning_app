const { ref, get, set, getDatabase, update } = require('firebase/database');

const AddIrregularVerbs = async (data) => {
    const db = getDatabase();
    
    try {
        const objectRef = ref(db, 'irregularVerbs'); 
        // Đổi thành đường dẫn thực tế của bạn
        
        const objectSnapshot = await get(objectRef);
        
        const newData = JSON.parse(`{${data.data}}`);

        if (!objectSnapshot.exists()) {
            // Nếu không tồn tại irregularVerbs, tạo mới và thêm data vào
            await set(objectRef, newData);
            return { errCode: 0, message: 'Object created and data added to the database' };
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
            return { errCode: 1, message: 'Object and keyName already exist in the database' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { errCode: -1, message: 'An error occurred' };
    }
};

module.exports = {AddIrregularVerbs};

