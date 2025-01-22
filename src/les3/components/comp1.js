import React, { useState, useEffect  } from 'react';


export default function PizzaYammy() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
               const respones = await fetch(`http://localhost:5125/WeatherForecast`);
              const data = await respones.json();
                // fetch(`http://localhost:5125/WeatherForecast`)
                //     .then((response) => response.text())
                //     .then(async (respones)=>await respones.json())
                //     .then((result) => console.log(result))
                //     .catch((error) => console.error(error));


            }
            catch (error) {
                console.error('ERROR fetching posts: ', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
        <h1>🍕🍔🍟🌭🍿🧂🥓🥗🥙🥪🌮🌯🥐🥫🍱🍜🍣🍲🥘🍬🍭🍪🎂🍰🥝</h1>
        <h2>im starving to tasty food!!!!!!!!!!!</h2>
            {data.map(data => (
                <p>{data.name}</p>
            ))}
        </>
    );
}
