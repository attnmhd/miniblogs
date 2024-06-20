import { useState} from "react"
import { useParams } from 'react-router-dom';
import { supabase } from "../Service/Fetch";
import { useArticle } from "../Service/Article";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";


export default function Form(){

  const {data : data} = useArticle()
  const { id } = useParams();
  console.log(id)
  const [state, setState] = useState({
    title: "",
    desc: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  // const userData = {
  //   title: state.title,
  //   desc: state.desc
  // };


  const addArticles = async () =>{
    await supabase
  .from('article')
  .insert({ title: state.title, description: state.desc })
  .returns(alert("Data berhasil ditambahkan"))
   }






  const updateArticles = async(id)=>{
   await supabase
  .from('articles')
  .update({ title: state.title, description: state.desc })
  .eq(id, id)
  }



  const handleSubmit = (e) => {
    e.preventDefault();


    if (id === "new"){
     
      addArticles()

    }
    else{
      updateArticles()
  }
  setState({
    title: "",
    desc : "",
  })
    }

  useEffect(()=>{
    data.map((item)=>{
      if(item.id == id){
        setState({
          title : item.title,
          desc : item.description
        })
      }
    })
  })
    

 
    return(
      <>
        <div className="mx-14 mt-10 border border-blue-500 rounded-lg ">
  <div className="mt-3 pt-4 text-center text-4xl font-bold">{id === "new" ? "Create " : "Update" } Article</div>
    <form onSubmit={handleSubmit} className="p-8">
    <label htmlFor="title" className="flex gap-4">
      <input type="text" name="title" value={state.title} onChange={handleChange} className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-medium placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title" />

    </label>
    <label htmlFor="desc">
      
      <textarea type="text" name="desc" value={state.desc} onChange={handleChange} cols="30" rows="10" className="mt-2 mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-medium text-black" placeholder="Desc" />
    </label>
      <button  type="submit" className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
      Save
      </button>
  </form>
</div>
<div className=" ml-12 mt-8">
  <a href="/admin">
<Button >Back</Button></a>
</div>
</>
    )
}