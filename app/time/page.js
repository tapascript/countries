
const getCurrentTime = async () => {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Asia/Kolkata`);

  return res.json();
}

const Time = async () => {

  const currentTime = await getCurrentTime();
  
  return (
    <>
      <h2>Current Time: {currentTime.datetime}</h2>
    </>
  )
}

export default Time;