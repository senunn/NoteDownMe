export const useAuth = () => {
    const token = localStorage.getItem("authToken");
    return !!token;
}