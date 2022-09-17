import axios from "axios";

export default class UserService {
	login(values) {
		return axios.post("http://localhost:8090/api/v1/auth/login", values);
	}

	register(values) {
		return axios.post("http://localhost:8090/api/v1/auth/register", values);
	}
}
