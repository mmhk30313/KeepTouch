import { request } from "../utils/request";

// get data list
export const get_all_blogs = () => {
    return request("/posts", {
        method: "get",
        header: "text/html; charset=utf-8",
    });
}

export const get_all_users = () => {
    return request("/users", {
        method: "get",
        header: "text/html; charset=utf-8",
    });
}