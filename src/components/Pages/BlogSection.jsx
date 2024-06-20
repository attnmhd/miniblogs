import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useArticle } from "../Service/Article";



function Kartu({title,desc, id}){
  return(
    <Card className=" w-full shadow-xl">
      <CardHeader shadow={true} floated={false} className=" h-56 ">
        <img
          src="https://www.material-tailwind.com/image/blog-11.jpeg"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {title}
          </Typography>

        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/posts/${id}`}>
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" 
        >
          Read More
        </Button></Link>
      </CardFooter>
    </Card>
  )
}

const contents = [
  {
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Last visits in US",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Grow in a beautiful area",
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Last visits in US",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
    title: "Grow in a beautiful area",
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  },
];

export function BlogSection11() {

  const {data:articles} = useArticle()

  return (
    <section className="container mx-auto px-8 pb-24" id="blog">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Build something great
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
      </Typography>

      <div className="mt-10 grid place-items-center gap-5 lg:grid-cols-4">
        {articles.map((item, index) => (
          <Kartu key={index} id={item.id} title={item.title} desc="Website visitors today demand a frictionless user expericence — especially when using search." />
        ))}
      </div>

      <div className="flex my-14 justify-center">
        <Button
            ripple={false}
            fullWidth={false}
          className=" w-60 bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100" 
        >
          More
        </Button>
      </div>

      
    </section>
  );
}

export default BlogSection11;