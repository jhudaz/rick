import axios from 'axios'

//action to get the featured courses
export function getTopCourses() {
  return dispatch => {
    return axios
      .get(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=36`)
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
export function getCourses(page, courseName = '') {
  return dispatch => {
    let url = `https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=${page}`;
    if(courseName !== '') {
      url += `&courseName=${courseName}`; 
    }
    return axios
      .get(url)
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