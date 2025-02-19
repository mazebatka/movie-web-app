import {axiosInstance} from "@/lib";

export const fetchDataFromTMDB = async <T>(endpoint:string)=>{
    const {data } = await axiosInstance.get<T>(endpoint);
    return data;
};