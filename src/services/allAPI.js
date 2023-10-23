import {BASE_URL} from './baseURL';
import { commonAPI } from './commonAPI';
import Category from '../Components/Category';

// uploading video
export const uploadVideo = async (video) => {
    // http post request to http://localhost:4000/videos for adding videos in json server and return response into Add component
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}


// get all videos from json server
export const getAllVideos = async () => {
     // http GET request to http://localhost:4000/videos for getting videos from json server and return response into View component
     return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

// get a single video from json server
export const getAVideos = async (id) => {
    // http GET request to http://localhost:4000/videos for getting videos from json server and return response to VideoCard component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}

// delete a single video from json server
export const deleteAVideos = async (id) => {
    // http GET request to http://localhost:4000/videos for getting videos from json server and return response into VideoCard component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

export const addToHistory = async (videoHistory) => {
    // http post request to  http://localhost:4000/history for adding videohistory from json server and return
    // response to watchHistory
    return await commonAPI("POST", `${BASE_URL}/history`, videoHistory)
}

export const getHistory = async () => {
    // http get request to  http://localhost:4000/history for get videohistory from json server and return
    // response to watchHistory
    return await commonAPI("GET", `${BASE_URL}/history`)
}
export const deleteAhistory = async (id) => {
    // http delete request to  http://localhost:4000/history for delete a videohistory from json server and return
    // response to watchHistory}
    return await commonAPI("DELETE", `${BASE_URL}/history/${id}`)
}

// adding category
export const addCategory = async (body) => {
    // http post request to http://localhost:4000/categories for adding category in json server and return response into Category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all categories
export const getAllCategory = async () => {
    // http GET request to http://localhost:4000/videos for getting categories from json server and return response into Category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}
// delete category
export const deleteCategory = async (id) => {
    // http delete request to http://localhost:4000/categories/id for getting videos from json server
    //  and return response to category component
    return await commonAPI("DELETE", `${BASE_URL}/categories/${id}`, {})
}

// update category from json server
export const updateCategory = async (id, updatedCategoryBody) => {
    // http put request to http://localhost:4000/categories/id for updating existing videos from json server
    //  and return response to category component
    return await commonAPI("PUT", `${BASE_URL}/categories/${id}`, updatedCategoryBody)
}