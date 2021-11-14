const StormService = {
    getCurrentStorms : async function(){
        const response = await fetch(process.env.REACT_APP_STORM_API + "/storms");

        if(response.status == 200){
            const json = await response.json();
            return json;
        }
        else{
            throw new Error(response.status.toString());
        }
    }
};

export default StormService