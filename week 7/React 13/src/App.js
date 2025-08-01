import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import ListComponent from './components/ListComponent';

function App() {
  const [view, setView] = useState('book');

  const courseList = [
    { id: 1, name: 'React Basics', author: 'John Doe' },
    { id: 2, name: 'Advanced React', author: 'Jane Smith' },
    { id: 3, name: 'React with TypeScript', author: 'Alice Johnson' },
  ];

  // 1️⃣ Conditional rendering using if-else
  const renderComponent = () => {
    if (view === 'book') return <BookDetails />;
    else if (view === 'blog') return <BlogDetails />;
    else return <CourseDetails />;
  };

  return (
    <div className="App">
      <h1>📘 Blogger App</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>

      {/* Method 1: If-Else Function */}
      {renderComponent()}

      {/* Method 2: Ternary Operator */}
      {/* 
        {view === 'book' ? <BookDetails /> 
          : view === 'blog' ? <BlogDetails /> 
          : <CourseDetails />} 
      */}

      {/* Method 3: Logical AND (&&) */}
      {/* 
        {view === 'book' && <BookDetails />}
        {view === 'blog' && <BlogDetails />}
        {view === 'course' && <CourseDetails />} 
      */}

      {/* List Rendering */}
      <ListComponent items={courseList} />
    </div>
  );
}

export default App;

