import { API_URL } from "../static/API_config.js"
import { toJson } from 'xml2json';
import fetch from 'node-fetch';

//장소별 실시간 정보 + XML 파싱 to JSON
export const fetchLiveData = async (placeName) => {
    console.log(placeName)
    const response = await fetch(API_URL(placeName))
                .then((res) => res.text())
                .then((xml) => toJson(xml, {
                        object: true, //반환값 object로 변환
                        reversible: false,
                        coerce: false,
                        sanitize: true,
                        trim: true,
                        arrayNotation: false,
                        alternateTextNode: false
                        }))
                .then((obj) => {
                    const seoulcitydata = Object.values(obj)[0]
                    console.log(seoulcitydata.CITYDATA.LIVE_PPLTN_STTS);
                })
    return response;
}