/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (data: { username: string; password: string }) =>
  api.post("/login", data);

export const getEmployees = () => api.get("/employees");
export const getEmployee = (id: number) => api.get(`/employees/${id}`);
export const createEmployee = (data: any) => api.post("/employees", data);
export const updateEmployee = (id: number, data: any) =>
  api.put(`/employees/${id}`, data);
export const deleteEmployee = (id: number) => api.delete(`/employees/${id}`);
export const getCountries = () => api.get("/countries");
export const getAccountTypes = () => api.get("/account-types");
