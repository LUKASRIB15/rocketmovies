import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<MoviePreview/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/new" element={<NewMovie/>} />
      <Route path="*" element={<Navigate to={"/"}/>}/>
    </Routes>
  )
}