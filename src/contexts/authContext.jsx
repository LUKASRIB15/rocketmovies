import { createContext, useEffect, useState } from "react";
import { api } from "../libs/api";

export const AuthContext = createContext({})

export function AuthProvider({children}){
  const [data, setData] = useState({})

  async function signUp({name, email, password}){
    try{
      await api.post("/users", {name, email, password})

      alert("Usuário criado com sucesso!")
    }catch(error){
      if(error.response && error.response.data){
        alert(error.response.data.message)
      }
    }
  }

  async function signIn({email, password}){
    try{
      const response = await api.post("/sessions", {email, password})
      
      const {user, token} = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user, token})
      localStorage.setItem("@rocketMovies:token", token)
      localStorage.setItem("@rocketMovies:user", JSON.stringify(user))
      
    }catch(error){
      alert("Usuário e/ou senha não conferem!")
      console.log(error)
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketMovies:token")
    localStorage.removeItem("@rocketMovies:user")
    api.defaults.headers.common['Authorization'] = ""
    setData({})
  }

  async function updateUser(userData, avatar){
    try{
      if(avatar){
        const avatarFormData = new FormData()
        avatarFormData.append("avatar", avatar)

        const user = await api.patch("/users/avatar", avatarFormData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        setData({user: user.data, token: data.token})
        localStorage.setItem("@rocketMovies:user", JSON.stringify(user.data))
      }

      if(userData.old_password && userData.password){
        await api.put("/users", userData)
      }

      alert("Usuário atualizado com sucesso!")
    }catch(error){
      console.log(error)
      alert("Erro ao atualizar o usuário. Tente novamente em breve!")
    }
  } 

  useEffect(()=>{
    const token = localStorage.getItem("@rocketMovies:token")
    const user = localStorage.getItem("@rocketMovies:user")

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user: JSON.parse(user), token})
    }
  },[])

  return (
    <AuthContext.Provider value={{user:data.user, signIn, signUp, signOut, updateUser}}>
      {children}
    </AuthContext.Provider>
  )
}