import { useState, useEffect } from "react"
import { supabase } from "./Fetch"





export const useArticle = () => {

    
    const [article, setArticle] = useState([])
    const fetchData = async() => {
        const { data } = await supabase
            .from('article')
            .select('*')
        setArticle(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data: article,
        fetchData
    }

}

 

