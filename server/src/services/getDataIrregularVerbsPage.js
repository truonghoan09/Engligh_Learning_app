const { ref, get, getDatabase } = require('firebase/database');

const sortData = (data) => {
    let result = {};
    let sortWord = [];
    let ArrResult = [];
    let count1 = 0;

    //1. Tạo mảng chứa từ V1 của cả danh sách để sắp xếp thứ tự các bộ từ trong hàng
    for (const word in data) {
        if (word.indexOf('1') !== -1){
            sortWord[count1] = word;
            count1 = count1 + 1;
        }

        if (data[word].meaning) {
            if (!result[data[word].meaning]) {
                result = {...result, ...{[data[word].meaning] : {[word] : data[word]}}}
            } else {
                result[data[word].meaning] = {...result[data[word].meaning], ...{[word] : data[word]}}
            }
        }
    }

    const sortWordByNumber = (data) => {
        // Chuyển 3 object là V1 V2 V3 của 1 từ thành 1 mảng chứa 3 object theo thứ tự [v1, v2, v3]
        const keys = Object.keys(data);
      
        // Sắp xếp mảng các khóa theo số xuất hiện trong dữ liệu
        keys.sort((a, b) => {
          const numberA = Number(a.match(/\d+/)[0]);
          const numberB = Number(b.match(/\d+/)[0]);
          return numberA - numberB;
        });
      
        // Tạo mảng mới với các V đã sắp xếp theo thứ tự
        const sortedArray = keys.map((key) => ({ [key]: data[key] }));
    
        return sortedArray;
    };

    
    for (const key in result) {
        result[key] = sortWordByNumber(result[key]);
    }
    
    
    sortWord.sort((a, b) => {
        let fa = a.toLowerCase(),
        fb = b.toLowerCase();
        
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    
    
    let count = 0;
    for (const key in result) {
        for (const key2 in result[key][0]){
                if (key2 === sortWord[count]) {
                    ArrResult[count] = {[key] : result[key]};
                    count = count + 1;
                }
        }
    }
    return ArrResult;
}

const translateToArr = (data) => {
    let arr = [];
    for (const key in data) {
        arr.push({[key]: data[key]});
    }
    // arr.sort((a, b) => {
    //     let fa = a.toLowerCase(),
    //     fb = b.toLowerCase();
        
    //     if (fa < fb) {
    //         return -1;
    //     }
    //     if (fa > fb) {
    //         return 1;
    //     }
    //     return 0;
    // });
    return(arr);
}


const GetIrregularVerbsPage = async () => {
    const db = getDatabase();
    let ArrResult = [];
    let ArrSubResult = '';
    try {
        const objectRef = ref(db, 'irregularVerbs'); 
        const objectSnapshot = await get(objectRef);
        const data_base = objectSnapshot.val();
        ArrResult = sortData(data_base);
        ArrSubResult = translateToArr(data_base, ArrResult);
        return {errCode: 0, message: 'Success', data: ArrResult, subData: ArrSubResult};
    }
    catch (error) {
        console.error('Error:', error);
        return { errCode: -1, message: 'An error occurred' };
    }
};

module.exports = GetIrregularVerbsPage;

