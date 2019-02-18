import axios from 'axios'

//action to get the featured courses
export function getTopCourses() {
  return dispatch => {
    return axios
      .get(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=7`)
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
//action to get other courses by page
export function getCourses(page) {
  return dispatch => {
    return axios
      .get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=${page}`)
      .then(res => {
        dispatch({
          type: "GET_COURSES",
          payload: res.data.items
        })
      })
      .catch(err => {
        throw err
      })
  }
}