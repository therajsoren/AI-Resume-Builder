import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

// create a new instance of axios

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createResume = (data: object) => {
  return instance.post("/user-resumes", data);
};
const GetUserResume = (userEmail: string) => {
  return instance.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);
};
const UpdateResumeDetail = (id: string, data: object) => {
  return instance.put("/user-resumes/" + id, data);
};
const GetResumeById = (id: string) => {
  return instance.get("/user-resumes/" + id);
};
const DeleteResumeById = (id: string) => {
  return instance.delete("/user-resumes/" + id);
};

export default {
  createResume,
  GetUserResume,
  GetResumeById,
  UpdateResumeDetail,
  DeleteResumeById,
};
