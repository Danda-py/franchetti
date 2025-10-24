export function checkAuth(username: string, password: string): boolean {
  return username === "Davide.Andaloro" && password === "Admin"
}

export function setAuthToken() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("franchetti_auth", "true")
  }
}

export function getAuthToken(): boolean {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("franchetti_auth") === "true"
  }
  return false
}

export function clearAuthToken() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("franchetti_auth")
  }
}
