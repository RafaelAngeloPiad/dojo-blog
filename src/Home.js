import React, { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    'http://localhost:8000/blogs'
  );

  /*const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'hotdog hotdog', author: 'johnnyboi', id: 1},
        {title: 'My oten', body: 'hotdog hotdog', author: 'johnnyboi', id: 2},
        {title: 'Momo is life', body: 'hotdog hotdog', author: 'whatataps', id: 3}
    ]);*/

  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const title = 'welcome sonny boy';
  const likes = 50;
  // const person = {name: 'yoshi', age: 30};
  const link = 'www.google.com';

  const handleClick = (e) => {
    setName('luigi');
    setAge(30);
  };

  const handleClickAgain = (name) => {
    console.log('WATATAPS BOI' + name);
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      <h2>HOMEPAGE</h2>
      <h1>{title}</h1>
      <p>i want to kiss you {likes} times.</p>
      <p>{10}</p>
      <p>{'hello ninjas'}</p>
      <p>{[1, 2, 3, 4, 5, 6, 7, 8]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google</a>
      <p>
        {name} is the age of {age}
      </p>
      <button onClick={handleClick}>CLICK ME BOI</button>

      <button onClick={() => handleClickAgain('mario')}>Click me again</button>

      {//loading
      isPending && <div>Loading...</div>}

      {blogs && <BlogList blogs={blogs} title='All Blogs?' />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'johnnyboi')}
          title="Johnnyboi's Blogs"
        />
      )}

      <button onClick={() => setName('luigi')}>change name</button>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
