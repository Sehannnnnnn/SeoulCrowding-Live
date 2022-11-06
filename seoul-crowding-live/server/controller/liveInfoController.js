import { SEOUL_PLACE_LIST } from "../repository/SeoulPlaceList.js";
import { fetchLiveData } from "../service/fetchLiveData.js";

const placeName = SEOUL_PLACE_LIST[21].name; 

const liveInfo = async (req, res) => {
    let example = await fetchLiveData(placeName);
    res.status(200).send(example);
}



export { liveInfo }