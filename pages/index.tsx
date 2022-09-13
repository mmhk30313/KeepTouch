import Head from 'next/head'
import Blogs from '../components/Blogs/Blogs';
// import Image from 'next/image';
import Layout from '../components/Layouts/MainLayout';
import { get_all_blogs, get_all_users } from '../services/blog.service';
// import styles from '../styles/Home.module.css';

export default function Home(props: any) {
  const {posts, photos} = props;
  // console.log({posts: posts});
  // console.log({photos});
  
  const blogs = posts?.map((post: any) => {
    const photo = photos?.find((photo: any) => photo.id === post.id);
    return {
      title: post?.title,
      body: post?.body,
      id: post?.id,
      ...photo
      // user: users.find((user: any) => user.id === post.userId)
    }
  });
  console.log("blog_length: ", blogs?.length);
  
  return (
    <div>
      <Head>
        <title>Keep in touch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <Login/> */}
        <main className='py-12 pr-10 md:p-12 md:px-10 md:mx-20'>
            <Blogs blogs={blogs}/>
        </main>

      </Layout>
    </div>
  )
};

export async function getServerSideProps(context: any) {
  const posts = await get_all_blogs();
  // const users = await get_all_users();
  const KEY = '15674931-a9d714b6e9d654524df198e00&q';
  const res = await fetch(`https://pixabay.com/api/?key=${KEY}=${""}&image_type=photo&pretty=true`);
  const photos = await res.json();

  console.log({photos});
  
  return {
    props: {
      posts,
      // users,
      photos: [...photos.hits, ...photos.hits, ...photos.hits, ...photos.hits, ...photos.hits].map((photo: any, idx: number) => { return {...photo, id: (idx+1) }}),
    }
  }
}
