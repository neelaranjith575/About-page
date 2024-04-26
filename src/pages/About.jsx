import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import PointCard from '../components/PointCard'
import data from '../assets/data.json';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'

const About = () => {

    const [percentage, setpercentage] = useState(55)

    function calculateScrollPercentage() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercent = Math.min(100, Math.floor((scrollTop / (documentHeight - windowHeight)) * 100));
        return scrollPercent;
      }      

    useEffect(() => {
        const handleScroll = () => {
          // Calculate scroll percentage here (refer to previous explanation)
          const scrollPercent = calculateScrollPercentage();
          setpercentage(scrollPercent);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => window.removeEventListener('scroll', handleScroll);
      });      

    return (
        <>
            <div className='w-full min-h-screen bg-[#3A3A1F] flex flex-row'>
                <div className='w-[45vw] h-full py-28 sticky top-0'>
                    <Heading data='DECOR 360' />
                    <div style={{ width: 300, height: 300 }} className='m-12'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3} styles={buildStyles({
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#F0FDF4`,
                            textColor: '#F0FDF4',
                            trailColor: '#67674B',
                        })} />
                    </div>
                </div>

                <div className='SlideSec w-[25vw] h-full'>
                    <div className='w-full h-[25vh]'></div>
                    {Object.keys(data).map((key) => (
                        <div className='pointCard' key={key}>
                            <PointCard
                                id={key}
                                title={data[key].title}
                                description={data[key].description}
                            />
                        </div>
                    ))}
                    <div className='w-full h-[25vh]'></div>
                </div>
            </div>
        </>
    )
}

export default About;