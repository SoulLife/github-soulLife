window.onload = function()
{
    class ObjectUtilities
    {
        static mergeObjects = (objA, objB) => ({...objA, ...objB});
        static removePassword = (obj) => {
            const tempObj = {...obj};
            delete tempObj.password;
            return tempObj;
        };
        static getOnlyVlaues = (obj) => {
            const arr = [];              
            for(var tempObject in obj)
            {
                arr.push(obj[tempObject]);
            }
            return arr;
        };
        static getOnlyProperties = (obj) =>{
            const arr = [];
            for(var tempObject in obj)
            {
                arr.push(tempObject);
            }
            return arr;
        }
        static freezeObj  = (obj)=>{
           const tempObj = {...obj};
           Object.freeze(tempObj);
           return tempObj;
        }
    };
    
    const objA = {
        name: "Nicolas",
        favFood: "Kimchi"
    };
    const objB =
    {
        password: "12345"
    }

    const user = ObjectUtilities.mergeObjects(objA,objB);
    console.log(user);
    const cleanUser = ObjectUtilities.removePassword(user);    
    console.log(cleanUser);
    const freezeUser = ObjectUtilities.freezeObj(cleanUser);
    const arrValueUser = ObjectUtilities.getOnlyVlaues(freezeUser);
    console.log(arrValueUser);
    const arrProperties = ObjectUtilities.getOnlyProperties(freezeUser);
    console.log(arrProperties);
    
}

