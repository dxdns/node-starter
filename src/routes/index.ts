import HomeGroup from "./home";
import UserGroup from "./user";

export const V1 = [
    {
        path: "/",
        router: HomeGroup
    },
    {
        path: "users",
        router: UserGroup
    }
];