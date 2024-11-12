import { create } from "zustand";
import axios from "axios";
// import { error } from "console";


const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	customers: [],
	plan:[],
	unsortnum1:[],
	unsortnum2:[],
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	message: null,

	signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
	login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

	logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
	verifyEmail: async (code) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
	forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},
	resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},
	CustomerReg: async (name, email, phoneNo, address, photo, adhaar, plan) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/register`, { name, email, phoneNo, address, photo, adhaar, plan });
			set({ customer: response.data.customer, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error on adding Customer", isLoading: false });
			throw error;
		}
	},
	GetCustomers: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/getcustomer`); // Adjust the endpoint as necessary
			set({ customers: response.data.data, isLoading: false });

		} catch (error) {
			set({ error: error.response.data.message || "Error on adding Customer", isLoading: false });
			throw error;
		}
	},
	AddPlans: async (planName,productName,planNo,uinNo) => {
		set({isLoading:true, error:null});
		try {
			const response = await axios.post(`${API_URL}/addplan`, { planName,productName,planNo,uinNo});
			set({ plan: response.data.plan, isAuthenticated: true, isLoading: false });

		} catch (error) {
			set({ error: error.response.data.message || "Error on adding plan", isLoading: false });
			throw error;
		}
	},
	showPlan: async() => {
		set({isLoading:true, error: null});
		try {
			const response = await axios.post(`${API_URL}/showplan`); // Adjust the endpoint as necessary
			set({ plan: response.data.data, isLoading: false });

		} catch (error) {
			set({ error: error.response.data.message || "Error on adding plan", isLoading: false });
			throw error;

		}
	},
	BingoGet: async() => {
		set({isLoading:true, error: null});
		try {
			const response = await axios.post(`${API_URL}/bingoget`); // Adjust the endpoint as necessary
			set({ unsortnum1: response.data.unsortnum1,unsortnum2: response.data.unsortnum2, isLoading: false });

		} catch (error) {
			set({ error: error.response.data.message || "Error on adding plan", isLoading: false });
			throw error;

		}
	},
	checkWin: async (value) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/checkwin`, {value});
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error ", isLoading: false });
			throw error;
		}
	}
}));