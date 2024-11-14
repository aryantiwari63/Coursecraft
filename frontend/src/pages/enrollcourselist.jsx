import React from 'react'

function enrollcourselist() {
    const [course, setCourse] = useState({});

    const fetchscourse = async () => {
      try {
        const res = await enrolllist();
        console.log("on main page", res);
        if (res) {
            setCourse(res.user);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    useEffect(() => {
        fetchscourse();
    }, []);

  return (
    <div>enrollcourselist</div>
  )
}

export default enrollcourselist
