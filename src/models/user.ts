export default class UserModel {
    protected users = [
        {
            id: 1,
            name: "test1"
        },
        {
            id: 2,
            name: "test2"
        },
    ];

    get = async () => this.users;

    getById = async (id: number) => {
        return this.users.find((v) => v.id === id);
    }
}