import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BlogCard from '../Components/BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetBlogData } from '../Redux/AppReducer/action'

const data = [
  {id:1, Title:"My First Blog", Content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto repellat animi deleniti perferendis, illum aperiam doloribus quam velit ducimus? Sed, accusamus nam ratione neque inventore dignissimos laborum ducimus, unde minima voluptas esse. Quas facilis facere deleniti quaerat ipsum, doloremque labore impedit recusandae eveniet nostrum quod adipisci dolores ipsa quam error accusantium nulla aliquam, sed, esse quidem! Illo reiciendis perferendis sed iure ducimus ad quia optio vitae ullam eveniet porro, fugit nisi eos, quod hic! Nam assumenda voluptatem veritatis quos quidem! Consectetur consequuntur labore illo unde, odio, delectus ullam aliquam soluta doloribus saepe tenetur inventore. Repellendus voluptatibus adipisci magnam quae accusamus."
},
{id:2, Title:"My First Blog", Content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto repellat animi deleniti perferendis, illum aperiam doloribus quam velit ducimus? Sed, accusamus nam ratione neque inventore dignissimos laborum ducimus, unde minima voluptas esse. Quas facilis facere deleniti quaerat ipsum, doloremque labore impedit recusandae eveniet nostrum quod adipisci dolores ipsa quam error accusantium nulla aliquam, sed, esse quidem! Illo reiciendis perferendis sed iure ducimus ad quia optio vitae ullam eveniet porro, fugit nisi eos, quod hic! Nam assumenda voluptatem veritatis quos quidem! Consectetur consequuntur labore illo unde, odio, delectus ullam aliquam soluta doloribus saepe tenetur inventore. Repellendus voluptatibus adipisci magnam quae accusamus."
},
{id:3, Title:"My First Blog", Content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto repellat animi deleniti perferendis, illum aperiam doloribus quam velit ducimus? Sed, accusamus nam ratione neque inventore dignissimos laborum ducimus, unde minima voluptas esse. Quas facilis facere deleniti quaerat ipsum, doloremque labore impedit recusandae eveniet nostrum quod adipisci dolores ipsa quam error accusantium nulla aliquam, sed, esse quidem! Illo reiciendis perferendis sed iure ducimus ad quia optio vitae ullam eveniet porro, fugit nisi eos, quod hic! Nam assumenda voluptatem veritatis quos quidem! Consectetur consequuntur labore illo unde, odio, delectus ullam aliquam soluta doloribus saepe tenetur inventore. Repellendus voluptatibus adipisci magnam quae accusamus."
},
{id:4, Title:"My First Blog", Content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto repellat animi deleniti perferendis, illum aperiam doloribus quam velit ducimus? Sed, accusamus nam ratione neque inventore dignissimos laborum ducimus, unde minima voluptas esse. Quas facilis facere deleniti quaerat ipsum, doloremque labore impedit recusandae eveniet nostrum quod adipisci dolores ipsa quam error accusantium nulla aliquam, sed, esse quidem! Illo reiciendis perferendis sed iure ducimus ad quia optio vitae ullam eveniet porro, fugit nisi eos, quod hic! Nam assumenda voluptatem veritatis quos quidem! Consectetur consequuntur labore illo unde, odio, delectus ullam aliquam soluta doloribus saepe tenetur inventore. Repellendus voluptatibus adipisci magnam quae accusamus."
}
]

const Blogs = () => {
  const dispatch = useDispatch();
const blogData = useSelector((store)=> store.AppReducer.blogs);
const token = useSelector((store)=> store.AuthReducer.token);


useEffect(()=>{
dispatch(GetBlogData(token));

},[blogData])
console.log(blogData);
  return (
    <Box>

      <Navbar/>
        

        <Box display='flex' flexDirection='column' w='90%' m='auto' mt='16' >
          {blogData.map((elem)=> <BlogCard key={elem.id} {...elem} /> )}

        </Box>


      <Footer/>
      
    </Box>
  )
}

export default Blogs
