import axios from 'axios'

//action to get the featured Courses
export function getTopCourses() {
  return dispatch => {
    return axios
      .get(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=${courseId}`)
      .then(res => {
        dispatch({
          type: "GET_TOP_COURSES",
          payload: res.data
        })
      })
      .catch(err => {
        throw err
      })
  }
}
//action to get other courses
export function getCourses() {
  return dispatch => {
    return axios
      .get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVA
      NCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`)
      .then(res => {
        dispatch({
          type: "GET_COURSES",
          payload: res.data
        })
      })
      .catch(err => {
        throw err
      })
  }
}