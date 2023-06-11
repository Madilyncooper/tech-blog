const blogAddFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('.title').value.trim();
    const content = document.querySelector('.content').value.trim();
  
    if ( content && title ) {
      const response = await fetch('/api/blogAdd', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.blogAdd')
    .addEventListener('submit', blogAddFormHandler);